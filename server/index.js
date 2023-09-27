const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const cors = require("cors");

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const adminRoute = require("./routes/admin");
const depositorRoute = require("./routes/depositors");
const subscribeRoute = require("./routes/subscribe");

// config for dotenv
dotenv.config();
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Connect DB
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

app.use(express.json());

// routes
app.get("/", (req, res) => res.send("Hello from vault :)"));
app.use("/api/adminRoute", adminRoute);
app.use("/api/depositorRoute", depositorRoute);
app.use("/api/subscribeRoute", subscribeRoute);

// Port setup
const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(" server is running on port:" + port);
});
