import connect from './configs/connect-db';
import { ADD_NEW_USER, CHECK_EMAIL_FROM_TABLE_USERS, GET_USER_BY_EMAIL } from './configs/queries';
import { hashPassword } from '../helpers/passwordEncryption';

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