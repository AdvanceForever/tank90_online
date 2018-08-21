function GameOver()
{
	this.x = 210;
	this.y = 512;
}

GameOver.prototype.draw = function()
{
	var myCanvas = document.getElementById("stage");
	var graphics = myCanvas.getContext("2d");
	var img = document.getElementById("tankAll");

	graphics.clearRect(this.x, this.y + 2, 62, 30);
	graphics.drawImage(img, images["gameOver"][0],images["gameOver"][1], 62, 30, this.x, this.y, 62, 30);

	if(this.y <= 100)
	{
		gameState = STATE_GAMESTART;
		graphics.clearRect(this.x, this.y, 62, 30);
		this.init();
	}

	this.y -= 2;
}

GameOver.prototype.init = function()
{
	this.y = 512;
}
