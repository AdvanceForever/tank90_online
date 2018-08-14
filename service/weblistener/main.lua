local skynet = require "skynet"
local socket = require "skynet.socket"

local port,num = ...

skynet.start(function()
    local agent = {}
    for i= 1, 10 do
        agent[i] = skynet.newservice("webworker")
    end
    local balance = 1
    local id = socket.listen("0.0.0.0", port)
    skynet.error("Listen web port: "..port)
    socket.start(id , function(id, addr)
        skynet.error(string.format("%s connected, pass it to agent :%08x", addr, agent[balance]))
        skynet.send(agent[balance], "lua", id)
        balance = balance + 1
        if balance > #agent then
            balance = 1
        end
    end)
end)
