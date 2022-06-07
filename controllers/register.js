
 const registerUser = (req, res) => {
    console.log(users)
    res.send(`${req.body.name} registered successfully`)
  }
  
  module.exports = registerUser