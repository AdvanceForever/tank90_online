function MenuSceneBg()
{
	this.x = 0;
	this.y = 512;
}

MenuSceneBg.prototype.draw = function(tick)
{
	var myCanvas = document.getElementById("upp");
	var graphics = myCanvas.getContext("2d");
	if(tick == 1)
	{
		graphics.fillStyle = "#000";
		graphics.fillRect(0, 0, 512, 448);
		graphics.drawImage(imgStart, this.x, this.y, 512, 448);
	}
	else if(tick < 103){
		graphics.drawImage(imgStart, this.x, this.y, 512, 448);
	}
	else if(tick == 103){
		graphics.drawImage(imgStart, this.x, this.y, 512, 448);

		//graphics.fillStyle = "#FFF";
		//graphics.font = "bold 20px Arial";
		//graphics.fillText("AI By Jules Wang", 10, 425);
	}

	if(tick<103){
		this.y -= 5;
	}
}

MenuSceneBg.prototype.init = function()
{
	this.y = 512;
}