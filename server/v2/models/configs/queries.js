/** 
 * ===========================================================
 * ===========================================================
 * ==================1. TABLE USERS===========================
 * ===========================================================
 * ===========================================================
 **/
// export const CREATE_DB_ANNOUNCEIT = `
// SELECT 'CREATE DATABASE announceit_db' WHERE NOT EXISTS(SELECT FROM pg_database WHERE datname='announceit_db');`;

export const CREATE_TABLE_USERS = `
    DROP TABLE IF EXISTS users CASCADE; 
    CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    fname VARCHAR(255),
    lname VARCHAR(255),
    address VARCHAR(255),
    phonenumber VARCHAR(255),
    email VARCHAR(50) UNIQUE,
    password VARCHAR(255),
    isadmin BOOLEAN);
    `;

export const GET_USER_BY_EMAIL = `
SELECT * FROM users WHERE email=$1;
`;

/** CHECKING IF AN EMAIL EXISTS FROM TABLE USERS OR NOT */
export const CHECK_EMAIL_FROM_TABLE_USERS = `
SELECT EXISTS(SELECT 1 FROM users WHERE email = $1);
`;

    //ADDING NEW USER
export const ADD_NEW_USER = `
INSERT INTO users(fname, lname, address, phonenumber, email, password, isadmin) 
VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING*;    
`

// ADDING SAMPLE USERS FOR TEST
export const ADD_SAMPLE_USERS = (hashedKey) => (`INSERT INTO users(
        fname, lname, address, phonenumber, email, password, isadmin) VALUES
    ('nezago','emma','Kigali','0782229462','emmamugira@gmail.com','${hashedKey}',true),
    ('descholar','emma','Kigali','0782229462','descholar.stech@gmail.com','${hashedKey}',false),
    ('descholar','NezaGo','Kigali','0782229462','descholar.stechnologies@gmail.com','${hashedKey}',true);`);


/**
 * ===========================================================
 * ===========================================================
 * ===================2. TABLE ANNOUNCEMENTS==================
 * ===========================================================
 * ===========================================================
 */

export const CREATE_TABLE_ANNOUNCEMENTS = `
    DROP TABLE IF EXISTS announcements CASCADE; 
    CREATE TABLE IF NOT EXISTS announcements (
    announcementid SERIAL PRIMARY KEY,
    announcementowner INTEGER,
    announcementstatus VARCHAR(10),
    annoucemmenttext VARCHAR(255),
    announcementstartdate DATE,
    announcementsenddate DATE,
    CONSTRAINT announcement_ownership FOREIGN KEY(announcementid) 
    REFERENCES users(id));
    `;

    //ADD ANNOUNCEMENT DATA SAMPLE FOR TESTS
export const ADD_SAMPLE_ANNOUNCEMENTS = `
INSERT INTO announcements(
    announcementowner,announcementstatus,annoucemmenttext,announcementstartdate,announcementsenddate)
    VALUES(1,'Pending','default',NOW(),'2020-12-31'),
    (1,'active','default',NOW(),'2020-12-31');`;