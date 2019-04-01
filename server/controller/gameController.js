const game = require("./data/data.json");
let myGame = [];
let id = 0;
module.exports = {
  gaminSesh: (req, res, next) => {
    res.status(200).send(game);
  },
  userAddGame: (req, res) => {
    let {
      average_rating,
      title,
      cover_art,
      Developer,
      ESRB_Rating,
      Synopsis,
      Category,
      Liked,
      Disliked,
      release_date
    } = req.body;
    let newGame = {
      id,
      average_rating,
      title,
      cover_art,
      Developer,
      ESRB_Rating,
      Synopsis,
      Category,
      Liked,
      Disliked,
      release_date
    };
    myGame.push(newGame);
    id++;
    res.status(200).send(myGame);
  },
  updateGame: (req, res, next) => {
    let { id } = req.params;
    // console.log(typeof(game.results));
    var newGame = game.results.findIndex(game => {
      return +id == game.id; //
    });
    console.log(newGame);
    if (newGame === -1) {
      res.status(404).send(`error`);
    } else {
      //console.log(game.results);
      console.log(req.query.liked, " hi");
      if (req.query.liked == "true") {
        game["results"][newGame]["Liked"] = true;
        game["results"][newGame]["Disliked"] = false;
      } else {
        game["results"][newGame]["Liked"] = false;
        game["results"][newGame]["Disliked"] = true;
      }
      res.send(game.results);
    }
  },
  gameDelete: (req, res) => {
    let { id } = req.params;
    let newGame = myGame.findIndex(game => {
      return +id === game.id;
    });
    if (newGame === -1) {
      res.status(404).send(`error`);
    } else {
      myGame.splice(newGame, 1);
      res.send(myGame);
    }
  }
};
// gameDeletes: (req, res) => {
//   let { id } = req.params;
//   let newGame = myGame.findIndex(game => {
//     return +id === game.id;
//   });
//   if (newGame === -1) {
//     res.status(404).send(`error`);
//   } else {
//     myGame.splice(newGame, 1);
//     res.send(myGame);
//   }
// }
