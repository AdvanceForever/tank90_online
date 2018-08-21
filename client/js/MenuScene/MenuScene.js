// 菜单场景

function MenuScene()
{
	this.tick = 0;
	this.bg = new MenuSceneBg();
}

MenuScene.prototype.onEnter = function()
{
}

MenuScene.prototype.onLeave = function()
{
	this.selector.init()
	clear("upp");
}

MenuScene.prototype.update = function()
{
	this.tick = this.tick + 1
	this.draw();
}

MenuScene.prototype.draw = function()
{
	if(this.tick<103){
		this.bg.draw(this.tick);
	}else if(this.tick==103){
		this.bg.draw(this.tick);
		this.selector = new TankSelector();
	}else{
		this.selector.draw();
	}
}

MenuScene.prototype.onkeydown = function(e)
{
	
	if(e.keyCode == K_UP) {this.selector.next(-1);}
	else if(e.keyCode == K_DOWN) {this.selector.next(1);}
	else if(e.keyCode == K_SPACE || e.keyCode == K_ENTER)
	{
		var msg = {cmd:"createGame",mode=""}
		send(msg)
		clear("upp");
		sceneMgr.enterScene("GameScene");
	}
}

MenuScene.prototype.init = function()
{
	this.bg.init();
	this.selector.init();
}











