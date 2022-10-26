import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  fullName: String,
  email: String,
  address: String,
  addressNumber: Number,
  phoneNumber: String,
});

export const User = mongoose.model("User", userSchema);
