GameFactory = {};

GameFactory.createGame = function(playerIds){
	var cardsDeck = createCardsDeck();
		targetsDeck = createTargetsDeck(),
		players = createPlayers(playerIds);

	GameFactory.dealPlayers(players,targetsDeck);	

	var board = dealBoard(cardsDeck);

	return {
		players: players,
		board:board,
		currentTurn: playerIds,
		inProgress: true,
		started: new Date()
	};
};


GameFactory.dealPlayers = function(players,deck){
	for (var i = 0; i < deck.length; i++) {
		Object.keys(players).forEach(function(id){
			players[id].hand.push(deck.shift());
		});
	};
}

function dealBoard(deck){
	var o = [];
	deck.forEach(function(c){
		o.push(c);
	});
	return o;
}


function createPlayers(ids){
	var o = [];
	ids.forEach(function(id){
		o.push({
			id: id,
			hand: [],
			pile: [],
			score: {
				targetsReached: 0
			}
		});

	});	
	return o;
}


function createCardsDeck(){
	var suits = ['I','L','T'],
		cards = [];

	suits.forEach(function(suit){
		for (var i = 1; i <= 3; i++){
			cards.push({
				suit: suit,
				value:i,
				name:suit + '_' +i,
				rotation: i%3
			});
		};
	});
	return cards;
	//return _.shuffle(cards);
}

function createTargetsDeck(){
	var suits = ['T1','T2','T3'],
		cards = [];

	suits.forEach(function(suit){
		for (var i = 1; i <= 1; i++){
			cards.push({
				suit: suit,
				value:i,
				name:suit + '_' +i
			});
		};
	});
	return cards;
	//return _.shuffle(cards);
}
