const express = require("express");
const cors = require('cors')
const app = express();

require("./config/mongoose.config");

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json(), express.urlencoded({ extended: true }));

const Exam2 = require("./routes/exam.routes");
Exam2(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));