local M = {
    nickname = "",
    status = "main"
}

function M.login(nickname)
    M.nickname = nickname
end

return M
