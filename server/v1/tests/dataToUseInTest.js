export default {
    userTest: {
        expectedDataForSignup: {
            "fname":"Minani",
            "lname":"Emmanuel",
            "email": "cool@gmail.com",
            "phonenumber": "0782229462",
            "isadmin": "true",
            "address": "kigali",
            "password": "AnnounceIT1."
        },
        expectedDataForSignupWithUsedEmail: {
            "fname":"Minani",
            "lname":"Emmanuel",
            "email": "emmamugira@gmail.com",
            "phonenumber": "0782229462",
            "isadmin": "true",
            "address": "kigali",
            "password": "AnnounceIT1."
        },
        wrongDataForSignup: {
            "fname": 'Doe',
            "email": "coolwergmail.com",
            "lname": 'John',
            "password": '23',
        },
        expectedDataForLogin: {
            "email": "emmamugira@gmail.com",
            "password": "AnnounceIT1."
        },
        expectedDataForLoginNotAdmin: {
            "email": "descholar.stech@gmail.com",
            "password": "AnnounceIT1."
        },
        wrongDataForLoginWithNoPassword: {
            "email": "emmamugira@gmail.com",
        },
        wrongDataEmailNotExist: {
            "email": "emmamugira@gmail.com",
            "password": "123",
        },
        loginNoEmail: {
            "password": "AnnounceIT1.",
        }
    },
    announcementTest: {
        announcementRegisterExpectedData: {
            "text":"buying computers",
            "startdate":"2020-01-09",
            "enddate":"2020-03-13"
        },
        announcementRegisterWrongData: {
        },
    },
    fakeToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTEDIyfQ.SlKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    ,
    dataOfAValidToken: {
        "id": 1,
        "email": "emmamugira@gmail.com",
        "isadmin": true
    },
    dataOfAValidTokenNoAnnouncs: {
        "id": 3,
        "email": "descholar.stechnologies@gmail.com",
        "isadmin": true
    },
    dataOfAValidTokenNotAdmin: {
        "id": 2,
        "email": "descholar.stech@gmail.com",
        "isadmin": false
    },
    dataToChangeAnnouncementStatus: {
        "id": 2,
        "status": "deactivated"
    },
    dataToChangeAnnouncementStatusInvalidID: {
        "id": "yyyyyyyyyyuuuuuuuu",
        "status": "deactivated"
    },
    toTestUserUpdateAnnouncementDetails:{
	"announcId":1,
	"announcNewBody":"New body"
},
    toTestUserUpdateAnnouncementDetailsNotExist:{
	"announcId":"yu",
	"announcNewBody":"New body"
}
}