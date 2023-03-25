const mongoose = require("mongoose");
// dasda
const connection = mongoose.connect(
  "mongodb+srv://ojasbendale18200:ojas@cluster0.f091zfa.mongodb.net/NotesApp?retryWrites=true&w=majority"
);

module.exports = { connection };
