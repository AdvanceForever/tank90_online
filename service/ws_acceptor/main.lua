local skynet = require "skynet"
local socket = require "skynet.socket"

local port = ...

skynet.start(function()
    local id = socket.listen("0.0.0.0", port)
    skynet.error("web socket server listen on: "..port)

    socket.start(id, function(fd, addr)
        local agent = skynet.newservice("agent",fd)
        skynet.error(string.format("%s connected, pass it to agent :%08x", addr, agent))
    end)
end)
