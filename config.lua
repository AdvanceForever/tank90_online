
-- preload = "./examples/preload.lua"	-- run preload.lua before every lua service run
thread = 8
logger = nil
logpath = "."
harbor = 0
start = "main"	-- main script
bootstrap = "snlua bootstrap"	-- The service for bootstrap
-- snax_interface_g = "snax_g"

skynet = "./skynet/"
-- skynet目录
luaservice = skynet.."service/?.lua;"..skynet.."test/?.lua;"..skynet.."examples/?.lua;"..skynet.."test/?/init.lua"
lualoader = skynet .. "lualib/loader.lua"
lua_path = skynet.."lualib/?.lua;"..skynet.."lualib/?/init.lua"
lua_cpath = skynet .. "luaclib/?.so"
snax = skynet.."examples/?.lua;"..skynet.."test/?.lua"
cpath = skynet.."cservice/?.so"

-- 项目目录 
luaservice = "./service/?.lua;./service/?/main.lua;"..luaservice
lua_path = "./lualib/?.lua;"..lua_path
lua_cpath = "./luaclib/?.so;"..lua_cpath

-- daemon = "./skynet.pid"

-- 参数
web_port = 7890
web_worker_num = 10

web_socket_port = 9999
