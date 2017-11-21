const path = require('path'),
    session = require('express-session'),
    user = require('../controllers/user.js'),
    poll = require('../controllers/poll.js'); 

module.exports = function(app){

    app.post('/login', function(req, res){
        user.login(req, res);
    })

    app.get('/logout', function(req, res){
        user.logout(req, res);
    })

    app.get('/getsession', function(req, res){
        user.getSession(req, res);
    })

    app.get('/getpolls', function(req, res){
        poll.getPolls(req, res);
    })

    app.post('/getpoll', function(req, res){
        poll.getPoll(req, res);
    })

    app.post('/vote', function(req, res){
        poll.vote(req, res);
    })

    app.post('/create', function(req, res){
        poll.create(req, res);
    })

    app.post('/delete', function(req, res){
        poll.delete(req, res);
    })

    app.post('/search', function(req, res){
        poll.search(req, res);
    })

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve('client/dist/index.html'))
    });

}