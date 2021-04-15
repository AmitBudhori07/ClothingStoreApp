const mongoose = require('mongoose');

const { Schema } = mongoose;
mongoose.set('useFindAndModify', false);

// Create Schema
const UserSchema = new Schema({
  userEmail: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: 'user',
    required: true,
  },
},
{
  timestamps: true,
});
const user = mongoose.model('USERS', UserSchema);
module.exports = user;
