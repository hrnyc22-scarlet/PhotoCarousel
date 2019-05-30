const path = require('path');
const pathnameToDb = path.join(__dirname, 'tripadvisorpictures.db');
const sqlite3 = require('sqlite3').verbose();


let db = new sqlite3.Database(pathnameToDb, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the tripadvisorpictures database.');
  });

  module.exports = db;


