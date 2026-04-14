const output = document.querySelector('#output');


/* STEP 1:
Create a JavaScript class called Game.
The class should store the title, genre, and maxPlayers.
*/

class Game{
constructor(title,genre,players){
    this.title = title;
   this.genre = genre;
   this.players = players;
}
gameInfo(){
    return `${this.title } is a ${this.genre} game that supports upto maximun ${this.players} players.`;
}
}


/* STEP 2:
Instantiate a new Game object using the class above.
Call it firstGame.
*/
const firstGame = new Game("Galaxy Fighters", "Action",4);
output.textContent = firstGame.gameInfo();



/* STEP 3:
Add a method to the Game class called gameInfo()
that returns a description of the game.
*/




/* STEP 4:
Call the gameInfo() method and display the result
in the output paragraph.
*/




/* STEP 5:
Create a subclass called MultiplayerGame that extends Game.
Add a new property called serverRegion.
*/

class MultiplayerGame extends Game{
    constructor(title,genre,players,serverRegion){
        super(title,genre,players);
        this.serverRegion = serverRegion;
    }
    



/* STEP 6:
Inside MultiplayerGame, add a method called serverInfo()
that describes which server the game is running on.
*/

serverInfo(){
    return `${this.title} is running on ${this.serverRegion} server.`;
}

isPoular(){
    return this.players > 50 ? "This game is very popular" : "This game has a small community";
}
}


/* STEP 6.1:
Add another method to MultiplayerGame called isPopular()
that returns a message depending on the number of players.
*/

/* STEP 7:
Create an instance of MultiplayerGame called battleRoyale.
*/
const battleRoyale = new MultiplayerGame("War Zone X","Shooter",100,"North America");



/* STEP 8:
Call the serverInfo() method and display it in the console.
*/
console.log(battleRoyale.serverInfo());
console.log(battleRoyale.isPoular());



/* STEP 9:
In the console, create another MultiplayerGame object
and test both methods:
- gameInfo()
- serverInfo()
*/




