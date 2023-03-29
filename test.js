const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//* connect DB
mongoose.connect('mongodb://127.0.0.1:27017/pcat-test-db');

//* create schema
const PhotoSchema = new Schema({
  title: String,
  description: String,
});

const Photo = mongoose.model('Photo', PhotoSchema);

// create a photo
// Photo.create({
//   title: 'Photo Title 2',
//   description: 'Photo description 2 lorem ipsum',
// });

//* read a photo
// Photo.find({}).then((data) => {
//   console.log(data);
// });

//* update a photo
/* const id = '64244d04a213606781c72049';
Photo.findByIdAndUpdate(
  id,
  {
    title: 'Photo title 12 updated',
    description: 'Photo description 12 updated',
  },
  {
    new: true,
  }
).then((data) => {
  console.log(data);
}); */

//* delete a photo
const id = '64244ea721882ea051148ffe';

Photo.findByIdAndDelete(id).then((data) => {
  console.log('Photo is removed...');
});
