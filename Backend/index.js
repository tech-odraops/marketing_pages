const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const express = require('express')
const app = express();
const port = 8080;
const connectDb = require("./databaseConnect");
const cors = require('cors')
const adminRoutes = require("./routes/adminRoutes");
const tokenValidation = require('./routes/tokenValiditiCheaker');
const waitlistRoute = require('./routes/waitlistRoute');
const { messagePost } = require("./routes/message");

const allowedOrigins = [
    "http://localhost:5173",
    "https://odraops.com",
    "https://www.odraops.com"
];

app.use(cors({
    origin: allowedOrigins,
    credentials: true
}))
app.use(express.json())



app.use('/', messagePost);

app.use("/admin", adminRoutes);
app.use('/token', tokenValidation);
app.use("/waitlist", waitlistRoute);

app.get("/ping", (req, res) => {
    res.status(200).send("OK");
});



app.listen(port, () => {
    console.log("Connection to backend established")
})

// connecting to database
connectDb()