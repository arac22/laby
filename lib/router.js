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
        game.players.forEach(function(p){
          p.username = Meteor.users.findOne({_id: p.id}).username;
        });
        var ct = game.currentTurn[0];
        game.currentTurn.username = Meteor.users.findOne({_id: ct}).username;
        return game;
      } else {
        return {};
      }
  	}
  });
});
