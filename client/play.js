
Template.play.events({
  	"click .card" : function(event,template){      
      // template.data is a game 
      // this is a card
      var gameId = template.data._id;
      var game = Games.findOne({_id: gameId});
      // console.log('game: '+game);
      // console.log('this' + this);
      game.board[this.index].rotation = rotateCW( game.board[this.index].rotation );
      Games.update(gameId,game);
 	}		
});

function rotateCW(rotation){
  rotation++;
  if (rotation >3) rotation = 0;
  return rotation;
}