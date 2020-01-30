import connect from './configs/connect-db';
import {
    ADD_NEW_USER,
    CHECK_EMAIL_FROM_TABLE_USERS,
    GET_USER_BY_EMAIL,
    UPDATE_USER_PASSWORD
} from './configs/queries';
import { hashPassword, checkPassword } from '../helpers/passwordEncryption';
import nodemailer from 'nodemailer';

class User {
    async saveUser(user) {
        const { fname, lname, email, phonenumber, address, password, isadmin } = user;
        const queryString = {text:ADD_NEW_USER,values:[fname,lname,address,phonenumber,email,password,isadmin]}
        const { rows } = await connect.query(queryString);
        return rows;
    }

    async checkIfEmailExistsFromDb(user) {
        const { email } = user;
        const queryString = { text: CHECK_EMAIL_FROM_TABLE_USERS, values: [email] };
        const { rows } = await connect.query(queryString);

        return rows[0].exists;
    }

    async getUserByEmail(email) {
        const queryString = { text: GET_USER_BY_EMAIL, values: [email] };
        const { rows } = await connect.query(queryString);
        return rows;
    }

    // resetting password
    async passwordReset(dataFromTheUser) {
        const { email, oldpassword, newpassword } = dataFromTheUser;
        const isEmailExist = await this.checkIfEmailExistsFromDb(dataFromTheUser);
        if (isEmailExist) {

            //varibales for the new password
                const newPassFirstPart = email.split('@')[0];
                const newPassSeconPart = Math.floor(Math.random() * 2021);
                const newFullPassword = newPassFirstPart + newPassSeconPart;
            
                const newHashedPass = hashPassword(newFullPassword);
            
            if (oldpassword) {
                // a user has submitted his password, we can check it
                //we recognize this user we can continue to reset his password
                if (newpassword) {
                    //change the old password to new
                    const requestingUser = await this.getUserByEmail(email);
                    if (checkPassword(oldpassword, requestingUser[0].password)) {
                        await connect.query({
                            text: UPDATE_USER_PASSWORD,
                            values: [hashPassword(newpassword), email]
                        });
                        
                        return {
                            status: 5,
                            message:'password updated successfully'
                        }
                    } else {
                        
                        return {
                            status: 4,
                            error: 'unknown credentials'
                        }
                    }
                } else {
                    return {
                        status: 3,
                        error:'cannot reset password to none, login instead'
                    }
                }
            } else {
                /* a user didn't submit his password, he doen't remember it, we create another one and we send it
                in the email */
                await connect.query({ text: UPDATE_USER_PASSWORD, values: [newHashedPass, email] });
                
                // sending him email
                const htmlToSend = `
                <div>
                
                    <h3>Congratulations!</h3>
                    <p>Your password has been changed successfully!</p>
                    <h1>Your new password is : ${newFullPassword}</h1>
                    <p>
                    <stron>Note:</strong>This password is random and it is to be guessed, we highly recommend you to change it
                    for the sake of your security</p>
                    
                    <p><em>The AnnounceIT team</em></p>

                </div>
          `;
                
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'recruit.neza@gmail.com',
                        pass: 'Nezagroup1.',
                    },
                    tls: {
                        rejectUnauthorized: false,
                    },
                });

                const mailOptions = {
                    from: 'recruit.neza@gmail.com',
                    to: email,
                    subject: 'Your password Reset request',
                    html: htmlToSend,
                };
                
                transporter.sendMail(mailOptions); //this is to sen email to the user, containing his new password

                // sending results to the user
                return {
                    status: 2,
                    message: `your password is reset successfully, we sent an email to you, check it`
                };
            }
            
        } else {
            return {
                status: 1,
                error:'unknown credentials'
            }
        }
    }
}


class UsersData{
    constructor(data) {
        this.email = data.email;
        this.fname = data.fname;
        this.lname = data.lname;
        this.password = hashPassword(data.password);
        this.phonenumber = data.phonenumber;
        this.address = data.address;
        this.isadmin = data.isadmin;
    }
}
const users = new User();
export default { users, UsersData};