const faker = require('faker');
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');
//const readline = require('readline');

const pathnameToDb = path.join(__dirname, 'tripadvisor.db');


const propertiesNames = [
  " Capri Lynbrook Motor Inn ",
  " Hotel Monticello-Georgetown ",
  " Lakefront Group Realty ",
  " Point Clear Grand Htl Marriott ",
  " Echo Lake Lodge ",
  " Trails West Cottages ",
  " Eureka Casino Hotel ",
  " Jersey & Associates ",
  " Inn At Walnut Creek ",
  " Simone Hodesh ",
  " Morten Kvammen ",
  " Fernwood Estates B & B ",
  " Mountain Meadows Lodge Inc ",
  " Furs Unlimited Corp ",
  " Day Hospitality Group ",
  " Midnight Properties ",
  " Northern Pine Lodge ",
  " Galen Conner ",
  " Hitchin' Post Rv Park ",
  " Bleu Rock Inn ",
  " Innsuites Best Western ",
  " Moonlight Bay Bed & Breakfast ",
  " Fireside Inn LLC ",
  " Fortune Bay Resort & Casino ",
  " Stoker White ",
  " Best Western-Franklin Park ",
  " Whitetail Creek Outfitters ",
  " Lopstick Lodge & Cabins ",
  " Pine Creek Apartments ",
  " Somerset Hills Hotel Assoc. L.p. ",
  " Marriott-Wentworth By The Sea ",
  " Inn On Charlotte Street ",
  " King & Prince Beach Resort ",
  " Cadillac Woods Resort & Cnvntn ",
  " Mr Michael G Martin ",
  " Howard Johnson Express ",
  " Ed Sales & Marketing Co ",
  " Lions Inn ",
  " Wolcott Hotel ",
  " Hotel Utica ",
  " Cliffs Resort ",
  " Holiday Inn Philadelphia-Stdm ",
  " Days Inn-South ",
  " Norma-Dan Motel ",
  " A-Z Gift Mall ",
  " Doubletree Hotel ",
  " Jackson & Wickliff Auctioneers ",
  " Caravan Inn Glenwood Springs ",
  " Nevermore ",
  " Happy Valley Lodge ",
  " Country Inn-Columbia ",
  " The Kitchen And The Bath By Kym Inc. ",
  " Crosscloud.com ",
  " Camp Doublecreek ",
  " Isle Of Capri Casino ",
  " Chocorua Camping Village ",
  " Ramada-Plaza Resort ",
  " Holiday Inn Coral GABLES-Um ",
  " Salbasgeon Suites ",
  " Flagship Motel & Efficiencies ",
  " The Milford Plaza Hotel ",
  " Radisson-Dallas ",
  " Worldwide Information Exchange ",
  " Annabelle Bed & Breakfast ",
  " Jim Kelly ",
  " Days Inn-Clemson ",
  " Dearborn Partners ",
  " Garden Gate Bed & Breakfast ",
  " Quail Ridge Inn Resort ",
  " Brittany Motel ",
  " Belle-Jim Hotel ",
  " Vail Beaver Creek Ski School ",
  " Pine Haven Resort ",
  " Campton Parkway Inn ",
  " Dogwood Motel ",
  " Commonwealth Court Guest House ",
  " Lytco Inc ",
  " Southwind's Motel ",
  " Evergreen Lodge ",
  " J Graphics ",
  " Mills House Hotel ",
  " Re/max Metro ",
  " Jared Tobman ",
  " Lakeside Inn And Casino ",
  " Border View Lodge ",
  " Swissotel ",
  " Boulder Community Network ",
  " Travelodge-la Grande ",
  " Basspoint Resort ",
  " The Orchards Hotel ",
  " Best Florida Resort Motel ",
  " Tremain Street Cottages ",
  " Super 8-Flagstaff West ",
  " Madison River Cabins & Rv ",
  " Lightscapes ",
  " Best Western-Baraboo Inn ",
  " Skipper And Company ",
  " Quality Inn-Clearwater ",
  " South Fork Resort ",
  " Round Bay Resort "
];

var categories = [
  "Sun",
  "Fun",
  "Attraction",
  "Scenic",
  "Nature",
  "Partying",
  "Vacation",
  "Playtime",
  "Summer",
  "Water"
]



let db = new sqlite3.Database(pathnameToDb, sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the tripadvisor database.');
});


propertiesNames.forEach(propertyName => {
  db.run(`INSERT INTO hotels (name) VALUES (?)`, [propertyName], (err) => {
    if (err) {
      return console.log(err.message);
    }
   
      console.log(`Hotel names have been inserted`);
    })
  }
)

for (var photoIndex = 1; photoIndex <= 58; photoIndex++) { //change photoindex limit when more photos added to S3
  let randomCategoryId = Math.floor(Math.random() * categories.length); 
  db.run(`INSERT INTO pictures (url, id_category) VALUES (?, ?)`, [`https://s3.amazonaws.com/photo-carousel/Pictures_for_carousel/HotelPhoto${photoIndex}.jpg`, randomCategoryId], (err) => {
    if (err) {
      return console.log(err.message);
    }
    
      console.log(`Hotel pictures have been inserted`);
    })
  
}












