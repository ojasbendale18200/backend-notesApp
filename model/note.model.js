const mongoose = require("mongoose");

// User Schema
const noteSchema = mongoose.Schema({
  title: String,
  body: String,
  status: Boolean,
  userID: String,
});

const NoteModel = mongoose.model("note", noteSchema);

module.exports = { NoteModel };
