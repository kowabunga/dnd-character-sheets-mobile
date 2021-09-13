import mongoose from 'mongoose';

export default async function connectDb() {
  console.log(process.env);
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB connected on ${connection.connection.host}`.cyan);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}
