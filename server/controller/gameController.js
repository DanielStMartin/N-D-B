const game = require("./data/data.json");
let favGame = [];
let laterGame = [];
let id = 0;
module.exports = {
  favGamin: (req, res, next) => {
    res.status(200).send(favGame);
  },
  laterGamin: (req, res, next) => {
    res.status(200).send(laterGame);
  },
  allGamin: (req, res, next) => {
    res.status(200).send(game);
  },
  userAddFav: (req, res) => {
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
    let newFavGame = {
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
    favGame.push(newFavGame);
    id++;
    res.status(200).send(favGame);
  },
  userAddLater: (req, res) => {
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
    let newLaterGame = {
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
    laterGame.push(newLaterGame);
    id++;
    res.status(200).send(laterGame);
  },
  updateGame: (req, res, next) => {
    let { id } = req.params;
    var newGame = game.results.findIndex(game => {
      return +id == game.id; //
    });
    console.log(newGame);
    if (newGame === -1) {
      res.status(404).send(`error`);
    } else {
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
  laterDelete: (req, res) => {
    let { id } = req.params;
    let newLaterGame = laterGame.findIndex(game => {
      return +id === game.id;
    });
    if (newLaterGame === -1) {
      res.status(500).send(`error`);
    } else {
      laterGame.splice(newLaterGame, 1);
      res.send(laterGame);
    }
  },

  favDelete: (req, res) => {
    let { id } = req.params;
    let newFavGame = favGame.findIndex(game => {
      return +id === game.id;
    });
    if (newFavGame === -1) {
      res.status(500).send(`error`);
    } else {
      favGame.splice(newFavGame, 1);
      res.send(favGame);
    }
  }
};
