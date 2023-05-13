const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = 8500;

//Middlewares
app.use(
  cors({
    credentials: true,
    origin: "*"
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Starting Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.get("/", (req, res) => {
  return res.json({ message: "Test..." });
});
const keepAlive2 = async () => {
  console.log("running keepAlive");
  const ping = await axios
    .get("https://render-hax2.onrender.com/", {
      responseType: 'stream',
    })
    .catch((error) => {
      console.log(error);
    });
  console.log(ping.data);
};

const keepAlive1 = async () => {
  console.log("running keepAlive");
  const ping = await axios
    .get("https://disc-bot-t2.onrender.com/", {
      responseType: 'stream',
    })
    .catch((error) => {
      console.log(error);
    });
  console.log(ping.data);
};

setInterval(keepAlive1, 12 * 60 * 1000);
setInterval(keepAlive2, 12 * 60 * 1000);
