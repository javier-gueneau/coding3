const express = require("express");
const cors = require('cors')
const app = express();
const cookieParser = require('cookie-parser');

require("./config/mongoose.config");

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cookieParser());

const Purchases = require("./routes/invest.routes");
const Value = require("./routes/value.routes");
const AllUserRoutes=require('./routes/user.routes');

Purchases(app);
Value(app);
AllUserRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));