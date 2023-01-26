import mongoose from "mongoose";

mongoose.set("strictQuery", true);
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useFindAndModify: false,
  // useCreateIndex: true,
});

const handleOpen = () => console.log("Connected to DB");
const handleError = (error) => console.log("DE Error", error);

mongoose.connection.on("erro", handleError);
mongoose.connection.once("open", handleOpen);
