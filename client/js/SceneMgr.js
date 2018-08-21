function SceneMgr()
{
	this.scenes = new Map()
}

SceneMgr.prototype.getScene = function(sceneName)
{
	var old = this.scenes.get(sceneName);
	if(old){
		return old;
	}

	var scene;
	if(sceneName == "MenuScene"){
		scene = new MenuScene();
	}
	else if(sceneName == "GameScene"){
		scene = new GameScene();
	}

	this.scenes.set(sceneName,scene);

	return scene;
}

SceneMgr.prototype.init = function()
{
	this.curScene = this.getScene("MenuScene")
}

SceneMgr.prototype.getCurScene = function(){
	return this.curScene;
}

SceneMgr.prototype.enterScene = function(sceneName){
	var newScene = this.getScene(sceneName);
	
	var old = this.curScene;
	old.onLeave();
	
	newScene.onEnter();

	this.curScene = newScene;
	
	return this.curScene;
}


