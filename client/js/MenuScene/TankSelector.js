function TankSelector()
{
	this.x = 160;
	this.time = 0;

	this.num = 0;
	this.ys = [245, 287, 329, 370];
}

TankSelector.prototype.draw = function()
{
	var myCanvas = document.getElementById("stage");
	var graphics = myCanvas.getContext("2d");
	var img = document.getElementById("tankAll");

	this.time ++;
	var temp;

	if( parseInt(this.time / 6) % 2 == 0)
	{
		temp = 0;
	}
	else
	{
		temp = 27;
	}
	graphics.drawImage(img, images["tankRun"][0],images["tankRun"][1] + temp, 27,27, this.x, this.ys[this.num], 27, 27 )
}

TankSelector.prototype.init = function()
{
	var myCanvas = document.getElementById("stage");
	var graphics = myCanvas.getContext("2d");
	graphics.clearRect(this.x, this.ys[this.num], 27, 27);

	this.time = 0;
	this.num = 0;
}

TankSelector.prototype.next = function(n)
{
	var myCanvas = document.getElementById("stage");
	var graphics = myCanvas.getContext("2d");

	graphics.clearRect(this.x, this.ys[this.num], 27, 27);

	if(n == 1)
	{
		if(this.num == 3)
		{
			this.num = 0;
			return;
		}
		this.num ++;
	}
	else
	{
		if(this.num == 0)
		{
			this.num = 3;
			return;
		}
		this.num --;
	}
}