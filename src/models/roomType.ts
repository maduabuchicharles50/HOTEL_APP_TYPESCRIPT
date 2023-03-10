import mongoose from "mongoose";

const roomTypeSchema = new mongoose.Schema(
  {
    codeName: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 100,
      unique: true,
      trim: true,
    },
  }
);

const RoomType = mongoose.model("RoomType", roomTypeSchema);
export default RoomType;