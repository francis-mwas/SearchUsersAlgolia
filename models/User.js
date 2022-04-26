import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    lowercase: true,
  },
  lastName: {
    type: String,
    required: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  userName: {
    type: String,
    required: true,
    lowercase: true,
  },
});

export default mongoose.model('User', UserSchema);
