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
            "email": "cool@gmail.com",
            lname: 'John',
            password: 'johndoe',
        },
        expectedDataForLogin: {
            "email": "emmamugira@gmail.com",
            "password": "123"
        },
        expectedDataForLoginNotAdmin: {
            "email": "descholar.stech@gmail.com",
            "password": "123"
        },
        wrongDataForLogin: {
            "email": "emmamugira@gmail.com",
        },
        loginNoEmail: {
            "password": "123",
        }
    },
    announcementTest: {
        announcementRegisterExpectedData: {
            "text":"buying computers",
            "startdate":"1/1/2020",
            "enddate":"22/2/2020"
        },
        announcementRegisterWrongData: {
        },
    },
    fakeToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTEDIyfQ.SlKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    ,
    dataOfAValidToken: {
        "id": "1",
        "email": "emmamugira@gmail.com",
        "isadmin": true
    },
    dataOfAValidTokenNotAdmin: {
        "id": "2",
        "email": "descholar.stech@gmail.com",
        "isadmin": false
    },
    dataToChangeAnnouncementStatus: {
	"id":2,
	"status":"deactivated"
}
}