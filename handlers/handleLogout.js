const handleLogout = async (req, res) => {
    res.clearCookie("token")
    return res.render("login")
}

module.exports = handleLogout