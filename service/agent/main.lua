local skynet = require "skynet"
local sock = require "sock"

local fd = ...

local CMD = {}

skynet.start(function()
    skynet.fork(sock.loop,fd)

    skynet.dispatch("lua", function (_, _, fd, method, ...)
        local f = assert(CMD[method])
        skynet.retpack(f(fd, ...))
    end)
end)
