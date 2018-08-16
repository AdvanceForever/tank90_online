local cjson = require "cjson"
local player = require "player"
local sock = require "sock"

local M = {}

function M.login(msg)
    player.login(msg)
    return {cmd="login",result="success"}
end

return M
