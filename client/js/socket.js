var websocket = null;

function connect(){
	//判断当前浏览器是否支持WebSocket
	if ('WebSocket' in window) {
		websocket = new WebSocket(server_addr);
	}
	else {
		alert('当前浏览器 Not support websocket')
	}
	
	//连接发生错误的回调方法
	websocket.onerror = function (evt) {
		console.log(evt);
	};

	//连接成功建立的回调方法
	websocket.onopen = function () {
		console.log("WebSocket连接成功");
		var msg = {cmd:"login",nickname:nick_name}
		send(msg)
	}

	//接收到消息的回调方法
	websocket.onmessage = function (event) {
		console.log("收到消息:" + event.data);
	}

	//连接关闭的回调方法
	websocket.onclose = function () {
		setMessageInnerHTML("WebSocket连接关闭");
	}
}

//监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
window.onbeforeunload = function () {
	closeWebSocket();
}

//关闭WebSocket连接
function closeWebSocket() {
	websocket.close();
}

//发送消息
function send(msg) {
	var str = JSON.stringify(msg);
	websocket.send(str);
	console.log("发送消息:" + str);
}