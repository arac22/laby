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
  		return game;
  	}
  });
});


/*
Router.configure ({
	layoutTemplate: 'layout'
})

Router.map(function() {
	this.route('home',{path:'/'});
	this.route('play',{path:'/play'});
})
*/