const express = require('express');
const app = express();
const path = require('path');
const parser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const db = require(path.resolve(__dirname, './database/database.js'));



app.use(parser.json());
app.use('/:hotelId', express.static(path.join(__dirname, './../client/dist')))
app.use(cors());
app.use(morgan('dev'));



let port = 3005
app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
})


let getHotelPicturesById = hotelId => {
  return new Promise((res, rej) => {
    db.get(
      `SELECT pictures.url FROM hotels, pictures, hotels_pictures WHERE 
        hotels.id = ${hotelId}
        AND hotels_pictures.id_hotels = ${hotelId} 
        AND pictures.id = hotels_pictures.id_pictures
    `, (err, hotel) => {
      if (err) {
        console.log(`Error retrieving hotelId: ${hotelId} from sqlite db : ${err}`);
        rej(err);
      } else {
        console.log(`Hotel id:  ${hotelId} successfully retrieved`);
        res(hotel);
      }
    });
  });
};

app.get('/:hotelId', (req, res) => {
  var hotelId = req.params.hotelId;
  getHotelPicturesById(hotelId)
  .then((pictureUrls) => {
    res.send(pictureUrls);
  })
})