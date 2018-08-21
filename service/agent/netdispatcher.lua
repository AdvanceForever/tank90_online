local cjson = require "cjson"
local player = require "player"
local sock = require "sock"
local handler = require "nethandler"


local M = {}

function M.init()
    sock.register_handler(M.handler)
end

function M.handler(text)
    local msg = cjson.decode(text)
    if not msg or not msg.cmd then
        return
    end
    local f = handler[msg.cmd]
    if not f then
        return
    end

    local retmsg = f(msg)
    if retmsg then
        sock.send(retmsg)
    end
end

return M
