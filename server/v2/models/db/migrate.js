import migrateAllTables from './generateTables';

try{(async () => { 
    await migrateAllTables();
})();
} catch (err) {
    console.log(err);   
}