
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
    announcementstatus VARCHAR(255),
    annoucemmenttext VARCHAR(255),
    announcementstartdate DATE,
    announcementsenddate DATE,
    CONSTRAINT announcement_ownership FOREIGN KEY(announcementowner) 
    REFERENCES users(id));
    `;

    //ADD ANNOUNCEMENT DATA SAMPLE FOR TESTS
export const ADD_SAMPLE_ANNOUNCEMENTS = `
INSERT INTO announcements(
    announcementowner,announcementstatus,annoucemmenttext,announcementstartdate,announcementsenddate)
    VALUES(1,'Pending','default','2020-01-02','2020-12-31'),
    (1,'active','default','2020-01-02','2020-12-31');`;

    //ADD NEW ANNOUNCEMENT
export const ADD_NEW_ANNOUNCEMENT = `
    INSERT INTO announcements(
    announcementowner,announcementstatus,annoucemmenttext,announcementstartdate,announcementsenddate)
    VALUES($1,$2,$3,$4,$5) RETURNING*;
`;

//GET ALL FOR THE CURRENT USER
export const GET_ALL_ANNOUNCEMENTS_FOR_CURRENT_USER = `
SELECT * FROM announcements WHERE announcementowner=$1 ORDER BY announcementid DESC;
`;

// GET ANNOUNCEMENT BY ID
export const GET_ANNOUNCEMENT_BY_ID = `
SELECT * FROM announcements WHERE announcementid=$1 AND announcementowner=$2;
`;

// GET ANNOUNCEMENT BY STATUS
export const GET_ANNOUNCEMENT_BY_STATUS = `
SELECT * FROM announcements WHERE announcementstatus=$1 AND announcementowner=$2 ORDER BY announcementid DESC;
`;

//GET ALL ANNOUNCEMENTS
export const GET_ALL_ANNOUNCEMENTS = `
SELECT * FROM announcements ORDER BY announcementid DESC;
`;

// DELETE ANNOUNCEMENT BY ID
export const DELETE_ANNOUNCEMENT = `
DELETE FROM announcements WHERE announcementid=$1 RETURNING*;
`;

// UPDATE STATUS OF ANNOUNCEMENT
export const UPDATE_ANNOUNCEMENT_STATUS = `
UPDATE announcements SET announcementstatus=$1 WHERE announcementid=$2 RETURNING*;
`;

// USER UPDATE HIS ANNOUNCEMENT
export const USER_UPDATE_HIS_ANNOUNCEMENT = `
UPDATE announcements SET annoucemmenttext=$1 WHERE announcementid=$2 AND announcementowner=$3 RETURNING*;`;

/** CHECKING IF AN EMAIL EXISTS FROM TABLE USERS OR NOT */
export const CHECK_ANNOUNCEMENT_EXISTANCE = `
SELECT EXISTS(SELECT 1 FROM announcements WHERE announcementid = $1);
`;
/**
 * ==================================================================
 * ==================================================================
 * =======================3. TABLE FLAGS=============================
 * ==================================================================
 * ==================================================================
 */
export const CREATE_TABLE_FLAGS = `
    DROP TABLE IF EXISTS flags; 
    CREATE TABLE IF NOT EXISTS flags (
    id SERIAL PRIMARY KEY,
    announcement_id INTEGER,
    created_on TIMESTAMPTZ,
    reason VARCHAR(255),
    description VARCHAR(255));`;

    //ADD SAMPLE FLAG FOR TEST
export const ADD_FLAG_FOR_SAMPLE = `
INSERT INTO flags(announcement_id, created_on, reason, description) VALUES(1,NOW(),'RealEstate','RealEstate');
`;

    // ADD A NEW FLAG
export const ADD_NEW_FLAG = `
INSERT INTO flags(announcement_id, created_on, reason, description) VALUES($1,NOW(),$2,$3) RETURNING*;
`;

// GET A FLAG BY ACCOUNCEMENT ID
export const GET_A_FLAG_BY_ANNOUNC_ID = `
SELECT * FROM flags WHERE announcement_id=$1;
`;

// GET ALL FLAG OF PARTICULAR REASON
export const GET_PARICULAR_FLAG_BY_REASON = `
SELECT * FROM flags WHERE reason=$1 ORDER BY id DESC;
`;