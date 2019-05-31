const express = require('express');
const app = express();
const path = require('path');
const parser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const db = require(path.resolve(__dirname, './database/database.js'));



app.use(parser.json());
app.use(cors());
app.use('/', express.static(path.join(__dirname, './../client/dist')))

app.use('/hotels/:hotelId', express.static(path.join(__dirname, './../client/dist')))
app.use(morgan('dev'));



let port = process.env.PORT || 3005;
app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
})


let getHotelPicturesById = hotelId => {
  return new Promise((res, rej) => {
    db.all(

      //SQLite3 Query:
      `SELECT pictures.url FROM pictures
        WHERE Hotel_id = ${hotelId}`, 
    
      //Callback:
    (err, hotelPictures) => {
      if (err) {
        console.log(`Error retrieving hotelId: ${hotelId} from sqlite db : ${err}`);
        rej(err);
      } else {
        console.log(`Hotel id:  ${hotelId} successfully retrieved`);
        console.log('Here\'s the data ', hotelPictures);
        res(hotelPictures);
      }
    }
    );
  });
};



app.get('http://3.215.111.101/hotelphotos/:hotelId', (req, res) => {
  var hotelId = req.params.hotelId;
  getHotelPicturesById(hotelId)
  .then((pictureUrls) => {
    res.send(pictureUrls);
  })
  .catch((err) => {
    res.send(`There was an error: ${err}`);
  })
})