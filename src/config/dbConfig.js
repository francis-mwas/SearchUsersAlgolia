import mongoose from 'mongoose';

const URI = 'mongodb://127.0.0.1:27017/demoSearch';
const connectDB = async () => {
  try {
    const connection = await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${connection.connection.host}`);
  } catch (error) {
    console.log(`MongoDB error when connecting: ${error}`);
  }
};

export default connectDB;
