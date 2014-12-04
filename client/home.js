Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});

Template.myTable.helpers({
   	games: function(){
			return Games.find({});
	}
});

Template.buttons.events({
	"click #btnNewGame" : function(event){
		var myId = Meteor.userId();
		if (myId){
	  		Meteor.call('createGame', [myId]);
		} else {
			console.log('Please SignIn first');
		}
  		//Router.go('/play');  	 
  	}
});


Template.tableRow.events({
	"click #btnJoinGame" : function(event){
		var myId = Meteor.userId();
		if (myId){
	  		Router.go('/play/'+ this._id);  	 
		} else {
			console.log('Please SignIn first');
		}
  		//Router.go('/play');  	 
  	},
	"click #btnDeleteGame" : function(event){
		var myId = Meteor.userId();
		if (myId){
	  		Meteor.call('deleteGame', this._id);
		} else {
			console.log('Please SignIn first');
		}
  		//Router.go('/play');  	 
  	}
});

