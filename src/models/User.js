import bcrypt from "bcrypt";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, requried: true, unique: true },
  avatarUrl: String,
  socialOnly: { type: Boolean, default: false },
  username: { type: String, requried: true, unique: true },
  password: { type: String },
  name: { type: String, requried: true },
  location: String,
  videos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Video" }],
});

userSchema.pre("save", async function () {
  // console.log("User password ", this.password);
  this.password = await bcrypt.hash(this.password, 5);
  // console.log("Hashed password:", this.password);
});

const User = mongoose.model("User", userSchema);
export default User;
