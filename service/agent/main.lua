local skynet = require "skynet"
local sock = require "sock"
local netdispatcher = require "netdispatcher"

local fd = ...
fd = tonumber(fd)

local CMD = {}

skynet.start(function()
    netdispatcher.init()

    skynet.timeout(0,function () skynet.fork(sock.loop,fd) end)

    skynet.dispatch("lua", function (_, _, fd, method, ...)
        local f = assert(CMD[method])
        skynet.retpack(f(fd, ...))
    end)
end)
