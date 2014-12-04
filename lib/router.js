Router.configure({
  layoutTemplate: 'layout'
});


Router.route('/', function () {
  this.render('home');
});


Router.route('/play/:_id', function () {
  this.render('play',{
  	data: function(){
  		var gameId = this.params._id;
  		var game = Games.findOne({_id: gameId});
      if (game){
        /*
        game.players.forEach(function(p){
          p.username = Meteor.users.findOne({_id: p.id}).username;
        });
        */
        var ct = game.currentTurn[0];
        game.currentTurn.username = Meteor.users.findOne({_id: ct}).username;
        game.board.rows = [
          [game.board[0],game.board[1],game.board[2]],
          [game.board[3],game.board[4],game.board[5]],
          [game.board[6],game.board[7],game.board[8]],
        ];
        return game;
      } else {
        return {};
      }
  	}
  });
});
