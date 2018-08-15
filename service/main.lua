local skynet = require "skynet"

skynet.start(function()
    skynet.error("server start...")

    -- web监听服务
    skynet.newservice("weblistener",
        skynet.getenv("web_port"),
        skynet.getenv("web_worker_num"))

    -- websocket监听服务
    skynet.newservice("ws_acceptor",
        skynet.getenv("web_socket_port"))
end)
