/* eslint-disable no-undef */
import {
    CREATE_TABLE_USERS,
    CREATE_TABLE_ANNOUNCEMENTS,
    ADD_SAMPLE_USERS,
    ADD_SAMPLE_ANNOUNCEMENTS,
    CREATE_TABLE_FLAGS,
    ADD_FLAG_FOR_SAMPLE
} from '../configs/queries';
import connect from '../configs/connect-db';
import { hashPassword } from '../../helpers/passwordEncryption';

const migrateAllTables = async (isDone) => {
    await connect.query({text:CREATE_TABLE_USERS});
    const hashedKey = hashPassword('AnnounceIT1.');
    await connect.query({text:ADD_SAMPLE_USERS(hashedKey)});
    await connect.query({text:CREATE_TABLE_ANNOUNCEMENTS});
    await connect.query({text:ADD_SAMPLE_ANNOUNCEMENTS});
    await connect.query({text:CREATE_TABLE_FLAGS});
    await connect.query({text:ADD_FLAG_FOR_SAMPLE});
    if (isDone) isDone();
    console.log('tables created successfully')
    process.exit(0);
}

try{(async () => { 
    await migrateAllTables();
})();
} catch (err) {
    console.log(err);   
}