import { hashPassword } from '../../helpers/passwordEncryption';

class User{
    constructor() {
        this.data = [];
    }

    //function to save new user
    saveUser(user){
        this.data.push(user);
        return this.data.find((dat) => (dat.email === user.email));
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
const users = new User;
export default { users, UsersData};