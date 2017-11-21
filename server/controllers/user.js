const mongoose = require('mongoose'),
    User = mongoose.model("User"),
    session = require('express-session');

module.exports = {
    login: function(req, res){
        User.findOne({name: req.body.name}, function(err, user){
            if(err) console.log(err);
            else if(user){
                req.session.name = user.name;
                req.session.user_id = user._id;
                req.session.logged = true;
                res.json(user);
            }else{
                let newUser = new User({name: req.body.name});
                newUser.save(function(err, addedUser){
                    if(err) console.log(err);
                    else{
                        req.session.name = addedUser.name;
                        req.session.user_id = addedUser._id;
                        req.session.logged = true;
                        res.json(addedUser);
                    }
                })
            }
        })
    },

    getSession: function(req, res){
        let result = {name: req.session.name, id: req.session.user_id, logged: req.session.logged}
        res.json(result);
    },

    logout: function(req, res){
        req.session.destroy();
        res.redirect('/')
    }
}