import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.connectDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("DB Connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

// -----previous code------
// import mongoose from "mongoose"

// export const connectDB = async () => {
  
// }