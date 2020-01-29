/* eslint-disable no-undef */
import dotenv from 'dotenv';
import migrateAllTables from './generateTables';

dotenv.config();

const { NODE_ENV } = process.env;

const resetTables = async () => {
    if (NODE_ENV === 'test') {
        console.log('THIS IS TESTING MODE, ALL TABLES ARE GOING TO BE RESET, SO ALL VALUES IN THEM WILL BE LOST!');
    await migrateAllTables();
  }
};

export default resetTables;
