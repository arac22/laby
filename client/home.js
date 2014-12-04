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
			var ids = [myId];
			Meteor.users.find({ _id:{$ne:myId}}).forEach(function(u){
				ids.push(u._id);
			});
	  		Meteor.call('createGame', ids);
		} else {
			console.log('Please SignIn first');
		}
  		//Router.go('/play');  	 
  	}
});


Template.tableRow.events({
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

