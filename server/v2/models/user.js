/* eslint-disable no-undef */
import { hashPassword } from '../helpers/passwordEncryption';

class User{
    constructor() {
        this.data = [
            {
                "id":1,
                fname: 'nezago',
                lname: 'emma',
                password: hashPassword('AnnounceIT1.'),
                email: 'emmamugira@gmail.com',
                isadmin:true
            },
            {
                "id":2,
                fname: 'descholar',
                lname: 'emma',
                password: hashPassword('AnnounceIT1.'),
                email: 'descholar.stech@gmail.com',
                isadmin:false
            },
            {
                "id":3,
                fname: 'descholar',
                lname: 'NezaGo',
                password: hashPassword('AnnounceIT1.'),
                email: 'descholar.stechnologies@gmail.com',
                isadmin:true
            },
        ];
    }

    //function to save new user
    saveUser(user){
        this.data.push(user);
        return this.data.find((dat) => (dat.email === user.email));
    }

    // fnction to get a user by email
    getUserByEmail(email) {
        return this.data.find((dat) => (dat.email === email));
    }
}

class UsersData{
    constructor(data,id) {
        this.id = id;
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