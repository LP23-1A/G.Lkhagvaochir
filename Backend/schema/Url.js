import mongoose from "mongoose";

const Urlschema = new mongoose.Schema({
  shortUrl: String,
  longUrl: String,
});
const Urls = mongoose.model("Url", Urlschema);
export default Urls;
