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
  		Meteor.call('createGame', 'opponent');
  		//Router.go('/play');  	 
  	}
});


