import mongoose, { Mongoose } from "mongoose";

export const connect = async (url: string): Promise<Mongoose> =>
  await mongoose.connect(url);

export const disconnect = async (): Promise<void> =>
  await mongoose.disconnect();
