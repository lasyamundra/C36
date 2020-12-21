var gameState = 0;
var playerCount;
var form, game, player;
var database;

function setup(){
  var canvas = createCanvas (400,400);

  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();
}

function draw(){

}