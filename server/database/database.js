const path = require('path');
const pathnameToDb = path.join(__dirname, 'tripadvisor.db');
const sqlite3 = require('sqlite3').verbose();


let db = new sqlite3.Database(pathnameToDb, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the tripadvisor database.');
  });

  module.exports = db;


