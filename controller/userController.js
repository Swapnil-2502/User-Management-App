let register = (req,res) => {res.send("This is register page")}

let login = (req,res) => {res.send("This is login page")}

let profile = (req,res) => {res.send("This is profile page")}

module.exports = {
    register,
    login,
    profile
}