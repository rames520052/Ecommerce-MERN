const {users} = require('../data')


const authorize = (req, res, next) =>{
    let user = users.find((user) => user.username === req.body.name && user.password === req.body.password)
    if(user){
        next()
    }
    else{
    res.sendStatus(401).send("Unauthorize access")
    }
}

const validate = (req, res, next) =>{
    let newUser = (name, password) => {
        if(name === '' || password === ''){
            res.send("Fill up the form correctly !!!");
            return
        }
        else{
            users.push({username : name, password: password})
            next()
        }
    }
    newUser(req.body.name, req.body.password);
}

module.exports = {authorize, validate}