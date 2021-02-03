
//Pulling model and Schema from mongoose, that's all we need instead of importing everything from mongoose
const {model, Schema} = require('mongoose');

const albumSchema = new Schema({
  artist: String,
  name: { type: String, required: true },
  description: String,
  img: String,
  price: Number,
  qty: Number,
});

// Keys in form must be the same in the Schema ... name = name, color = color, readyToEat = readyToEat

const Album = model('Album', albumSchema);

module.exports = Album;




