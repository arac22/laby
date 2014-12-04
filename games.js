Games = new Mongo.Collection("games");



if (Meteor.isServer){
	Meteor.publish('games',function(){
		//return Games.find({currentTurn: this.userId});
		return Games.find();
	});

	Meteor.publish('users',function(){
		//return Meteor.users.find();
		return Meteor.users.find({},{fields: {username:1}});
	})
}

if (Meteor.isClient){
	Meteor.subscribe('games');
	Meteor.subscribe('users');
}


Meteor.methods({
	createGame: function(playerIds){
		var game = GameFactory.createGame(playerIds);
		Games.insert(game);
	},
	deleteGame: function(gameId){
		Games.remove({_id:gameId});
	},
	takeTurn: function(gameId,id,card){
		console.log(id,card);
	}

});