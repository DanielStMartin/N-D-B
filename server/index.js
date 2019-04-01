const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const gameController = require("./controller/gameController");

app.use(bodyParser.json());

app.get("/api/game", gameController.gaminSesh);
app.post("/api/game", gameController.userAddGame);
app.put("/api/game/:id", gameController.updateGame);
app.delete("/api/game/:id", gameController.gameDelete);
// app.delete("/api/game/:id", gameController.gameDeletes);

const PORT = 4072;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
