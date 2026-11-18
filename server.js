const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

function genId() {
	return Math.floor(Math.random() * Date.now() / 2);
}
const app = express();
app.use(cors());
app.use(express.json());
// Static
app.use(express.static(path.join(__dirname, "public")));
app.use("/static", express.static(path.join(__dirname, "static")));

app.get("/api/v1/redis/info", (req, res) => {
	const payload = {
		url: process.env.STORAGE_REDIS_URL
		
    }
	res.json(payload);
});

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || 5000;

app.listen(PORT, HOST, () => console.log(`Server listen at port ${PORT}`));