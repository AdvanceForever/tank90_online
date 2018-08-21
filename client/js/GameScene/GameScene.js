// 游戏场景

function GameScene()
{
}

GameScene.prototype.onEnter = function()
{
	this.stageStart = new StageStart();
	this.stageStart.init();
}

GameScene.prototype.onLeave = function()
{
}

GameScene.prototype.update = function()
{
	this.draw();
}

GameScene.prototype.draw = function()
{
	this.stageStart.draw();
}

GameScene.prototype.onkeydown = function(e)
{
}

GameScene.prototype.init = function()
{
}











