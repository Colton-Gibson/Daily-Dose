import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  user: String,
  message: String,
  createdAt: String
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
