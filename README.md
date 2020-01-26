# Description of AnnounceIT platform

[![Build Status](https://travis-ci.org/descholar-ceo/AnnounceIT.svg?branch=develop)](https://travis-ci.org/descholar-ceo/AnnounceIT) [![Coverage Status](https://coveralls.io/repos/github/descholar-ceo/AnnounceIT/badge.svg)](https://coveralls.io/github/descholar-ceo/AnnounceIT) [![Maintainability](https://api.codeclimate.com/v1/badges/40055eb7c678b9aefc6f/maintainability)](https://codeclimate.com/github/descholar-ceo/AnnounceIT/maintainability)
## What and Why AnnounceIT

_Since the rise of the internet, more people have switched their attention from spending hours
watching TV and listening to the radio or even reading newspapers to scrolling and tapping on
their phones and laptops. Businesses can now reach more eyeballs online than the more
traditional approaches._

**AnnounceIT comes in as a solution to broadcasting agencies which will will allow them to be able
to receive and manage announcements.**

## Features
* User can sign up.

* User can sign in.

* User (advertiser) can create an announcement.

* User (advertiser) can update details of an announcement.

* User (advertiser) can view all his/her announcements.

* User (advertiser) can view all announcements of a specific state -
accepted, declined, active, deactivated, etc.

* User (advertiser) can view a specific announcement.

* User (admin) can delete an announcement.

* User (admin) can change the status of an announcement.

* User (admin) can view announcements from all users.

## User Interfaces

 * Visit this link  [For Users](https://descholar-ceo.github.io/AnnounceIT/UI/html/index.html)

* Visit this link  [For Admin side](https://descholar-ceo.github.io/AnnounceIT/UI/html/admin-side/admin-page.html)


## API Endpoints Specifications

- Api Roots : descholar-announce-it.herokuapp.com/api/v1

| Endpoint | Request | Status | Description |
| --- | --- | --- | --- |
| / | GET | 200 OK | Helps users to access to the parent api for the whole application|
| /auth/signup | POST | 201 CREATED | Makes a post request to signup a new user and return access token |
| /auth/signin | POST | 200 OK | Makes a post request to login an existing user and return an access token |
| /announcements/create-announcement | POST | 201 CREATED | Makes a post request, for creating or saving a new anouncement |
| /announcements/get-all-announcement-for-current-user | GET | 200 OK | Makes a GET request to retrieve all announcements created by the currently logged-in user |
| /announcements/get-specific-announcement/:announcementId | GET | 200 OK | Makes a GET request, in order to get a specific announcement using its ID |
| /announcements/get-specific-announcement-by-status/:announcementStatus | GET | 200 OK | Makes a GET request to retrieve all specific announcements using their statuses |
| /announcements/admin-get-all-announcements-from-all-users | GET | 200 OK | Makes a GET request to retrieve all announcements posted by all users, this request is for admins only |
| /announcements/admin-delete-announcement/:id | DELETE | 200 OK | Makes a DELETE request, to delete a specific announcement using its ID, this API is for admins only  |
| /announcements/admin-change-announcement-status | PATCH | 200 OK | Makes a PATCH request in order to update an announcement-status, this request if for admins only |
| /announcements/user-update-announcement-details | PATCH | 200 OK | Makes a PATCH request allowed for a all users, who want to update his/her own announcement |

## Tools

Tools used for development of this API are;
- Documentation : [Swagger](https://swagger.io/).
- Code Editor: [VSCode](https://code.visualstudio.com/).
- Languages :
    * Frontend: 
        * [HTML5](https://www.w3schools.com/html/html5_intro.asp).
        * [CSS3](https://www.w3schools.com/css/).
        * [JavaScript ES6 syntax](https://www.javascripttutorial.net/es6/).
    * Backend:
        * [NodeJS](https://nodejs.org/en/) => [Express (framework)](https://expressjs.com/)

- API Testing tools: 
    * [Postman](https://www.getpostman.com/)
    * [Mocha](https://mochajs.org/) and [chai](https://www.chaijs.com/)

* Code Coverage, maintenability, and CI:
    * [Travis CI](https://travis-ci.org/ "Continuous Integration (CI)"), [Coverrals](https://coveralls.io/ "Coverrage") and [Codeclimate](https://codeclimate.com/ "Code maintanability")

* Version control system: [Git](https://git-scm.com/)

## Getting Started

### Prerequisites
Make sure you have:
- Node v10.15.0 or above
- npm v6.4.0 or above
Ready installed on you machine, check it by `npm -v` to check if you have _npm_, and `node -v` to check if you have _node_ 

Clone the Repo.
-------------
1. `git clone https://github.com/descholar-ceo/AnnounceIT.git`
2. `cd AnnounceIT`
3. create a `.env` file in parent directory of the project 
4. add `PORT=80801` hit enter `TOKEN_KEY=announceit`
5. `npm start`

## Deployment
- Github pages (User Interface) : https://descholar-ceo.github.io/AnnounceIT/UI/html/
- Heroku (Backend) : http://descholar-announce-it.herokuapp.com/

## Key contributor to development
* [MUGIRASE Emmanuel (descholar)](https://github.com/descholar-ceo/)