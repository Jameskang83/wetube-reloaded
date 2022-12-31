import mongoose from 'mongoose';

mongoose.set('strictQuery', true);
mongoose.connect("mongodb://127.0.0.1:27017/wetube", {
    useNewUrlParser: true,
});


const handleOpen = () => console.log("Connected to DB");
const handleError = (error) => console.log("DE Error", error);

mongoose.connection.on("erro", handleError);
mongoose.connection.once("open", handleOpen);
