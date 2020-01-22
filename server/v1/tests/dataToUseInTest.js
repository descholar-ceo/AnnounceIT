export default {
    userTest: {
        expectedDataForSignup: {
            "fname":"Minani",
            "lname":"Emmanuel",
            "email": "cool@gmail.com",
            "phonenumber": "0782229462",
            "isadmin": "true",
            "address": "kigali",
            "password": "123"
        },
        wrongDataForSignup: {
            fname: 'Doe',
            lname: 'John',
            password: 'johndoe',
            isadmin:true
        },
        expectedDataForLogin: {
            "email": "emmamugira@gmail.com",
            "password": "123"
        },
        wrongDataForLogin: {
            "email": "emmamugira@gmail.com",
        },
        loginNoEmail: {
            "password": "123",
        }
    }
}