import mongoose from "mongoose";

const sumSchema = new mongoose.Schema({
  a: Number,
  b: Number,
  result: Number,
});

export const Sum = mongoose.model("Sum", sumSchema);

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log("database connected...");
  } catch (error) {
    console.error("Failed to connect to db");
    process.exit(1);
  }
}

export async function resetDb() {
  Sum.deleteMany();
}
