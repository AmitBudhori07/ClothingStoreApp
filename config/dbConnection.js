const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const uri = 'mongodb+srv://admin:TV8WsLX6VlXoAurJ@clothingstore.qky89.mongodb.net/clothingStore?retryWrites=true&w=majority';

    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    console.log('Mongoose db connected');
  } catch (err) {
    console.error(`MongoDB Error: ${err.message}`);
  }
};

module.exports = connectDB;
