const output = document.querySelector('#output');

/* =========================================
   STEP 1:
   Create a constructor function called Game
   It should store:
   - title
   - genre
   - players
========================================= */
function Game(title,genre,players){
   this.title = title;
   this.genre = genre;
   this.players = players;
}



/* =========================================
   STEP 2:
   Add a method to the prototype called
   description() that returns game info.
========================================= */

Game.prototype.description = function(){
   return `${this.title} is a ${this.genre} game with ${this.player} players online`;
}


/* =========================================
   STEP 3:
   Instantiate a game object using new Game()
========================================= */

const game1 = new Game("Battle Arena","Action",1200);




/* =========================================
   STEP 4:
   Display description() result in output
========================================= */
output.textContent = game1.description();



/* =========================================
   STEP 5:
   Create another object using Object.create()
   based on first game.
========================================= */
const game2 = Object.create(game1);

/* =========================================
   STEP 6:
   Modify properties of new object
========================================= */
game2.title = "Space Battle";
game2.genre = "Sci-fi";
game2.players = 800;

/* =========================================
   STEP 7:
   Use constructor to create another instance
========================================= */
const game3 = new game1.constructor("Fanatsy Quest","RPG",500);
//game1.constructor === Game



/* =========================================
   STEP 8:
   Add prototype method isPopular()
========================================= */
Game.prototype.isPopular = function(){
   return this.players > 1000 ? "This game is very popular" : "This game has a small community";
}