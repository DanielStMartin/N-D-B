const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const gameController = require("./controller/gameController");

app.use(bodyParser.json());

app.get("/api/game", gameController.allGamin);
app.get("/api/favgame", gameController.favGamin);
app.get("/api/latergame", gameController.laterGamin);
app.post("/api/favgame", gameController.userAddFav);
app.post("/api/latergame", gameController.userAddLater);
app.put("/api/game/:id", gameController.updateGame);
app.delete("/api/favgame/:id", gameController.favDelete);
app.delete("/api/latergame/:id", gameController.laterDelete);

const PORT = 4072;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
