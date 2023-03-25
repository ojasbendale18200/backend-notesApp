const express = require("express");
const { connection } = require("./db");
const { auth } = require("./middlewares/auth.middleware");
const { noteRouter } = require("./routes/notes.routes");
const { userRouter } = require("./routes/user.routes");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

// Miidlewares
app.use("/users", userRouter);
app.use(auth);
app.use("/notes", noteRouter);

app.get("/", (req, res) => {
  res.send("Notes Page");
});

app.listen(4000, async () => {
  try {
    await connection;
    console.log("connected to DB");
  } catch (error) {
    console.log("Not Connected");
  }

  console.log("server running on port 4000");
});
