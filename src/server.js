import express from "express";

const PORT = 4000;

const app = express();

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

// const privateMiddleware = (req, res, next) => {
//     const url = req.url;
//     if(url === "/protected"){
//         return res.send("<h1>Not Allowed</h1>");
//     }
//     console.log("Allowed, you may continue.");
//     next();
// }

const handlehome = (req, res) => {
    return res.send("I love middlewares");
};

app.get("/", logger, handlehome);

// const handleProtected = (req, res) => {
//     return res.send("Welcome to the private lounge.");
// }

// app.use(logger);
// app.get("/protected", logger, handleProtected);

const handleListening = () => 
    console.log(`Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);


