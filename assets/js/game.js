$(document).ready(function(){


var gameProperties = {

	init: {
		// maximum value  is 80
		targetPts:  Math.floor(Math.random() * (80 - 19 + 1) + 19),
		currentPts: 0,
		wins:0,
		losses:0,
	},

	crystals: {
		crystal1: {
			img:$("#crystal1"),
			val: Math.floor(Math.random() * (5 - 1 + 1) + 1)},
	crystal2: {
			img:$("#crystal2"),
			val: Math.floor(Math.random() * (8 - 1 + 1) + 1)},
		crystal3: {
			img:$("#crystal3"),
			val: Math.floor(Math.random() * (11 - 1 + 1) + 1)},
		crystal4: {
			img:$("#crystal4"),
			val: Math.floor(Math.random() * (13 - 1 + 1) + 1)},
	},


	render: {
		dispTargetPts: $("#targetPts"),
		dispCurrentPts: $("#currentPts"),
		dispWinCount: $("#wins"),
		dispLossCount: $("#losses"),
	}
};

$("#targetPts").html("Target Points: " + gameProperties.init.targetPts);
$(".crystal").on("click", function(){
	$("#gameAlert").html("");
	var g = "gameProperties.crystals."+$(this).attr("id")+".val";
		gameProperties.init.currentPts += eval(g);
		gameProperties.render.dispCurrentPts.html("Current Points: " + gameProperties.init.currentPts);

		if (gameProperties.init.currentPts === gameProperties.init.targetPts){
			gameProperties.init.wins++;
			$("#gameAlert").html("You've Won!");
			resetGame();
		}

		else if (gameProperties.init.currentPts > gameProperties.init.targetPts){
			gameProperties.init.losses++;
			$("#gameAlert").html("You've Lost!");
			resetGame();
		}
});

// resets the game
function resetGame(){
	gameProperties.init.targetPts = Math.floor(Math.random() * (80 - 19 + 1) + 19);
		gameProperties.crystals.crystal1.val = Math.floor(Math.random() * (12 - 1 + 1) + 1);
		gameProperties.crystals.crystal2.val = Math.floor(Math.random() * (12 - 1 + 1) + 1);
		gameProperties.crystals.crystal3.val = Math.floor(Math.random() * (12 - 1 + 1) + 1);
		gameProperties.crystals.crystal4.val = Math.floor(Math.random() * (12 - 1 + 1) + 1);
	$("#targetPts").html("Target Points: " + gameProperties.init.targetPts);
		gameProperties.init.currentPts = 0;
		gameProperties.render.dispCurrentPts.html("Current Points: " + gameProperties.init.currentPts);
		gameProperties.render.dispWinCount.html("Wins: " + gameProperties.init.wins);
		gameProperties.render.dispLossCount.html("Losses: " + gameProperties.init.losses);

}
});
