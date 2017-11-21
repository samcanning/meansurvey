const mongoose = require('mongoose'),
    session = require('express-session'),
    Poll = mongoose.model('Poll');

module.exports = {
    create: function(req, res){
        var newPoll = new Poll({asker: req.session.name, question: req.body.question,
            option1: {option: req.body.option1}, option2: {option: req.body.option2},
            option3: {option: req.body.option3}, option4: {option: req.body.option4}})
        newPoll.save(function(err, poll){
            if(err) console.log(err);
            else res.json(poll);
        }) 
    },

    getPolls: function(req, res){
        Poll.find({}, function(err, polls){
            if(err) console.log(err);
            else if(polls) res.json(polls);
        })
    },

    getPoll: function(req, res){
        Poll.findById(req.body.pollID, function(err, poll){
            if(err) console.log(err);
            else if(poll) res.json(poll);
            else res.redirect('/main')
        })
    },

    vote: function(req, res){
        Poll.findById(req.body.pollID, function(err, poll){
            if(err) console.log(err);
            else{
                if(req.body.optionNumber == 1){
                    let newTotal = poll.option1.votes++;
                    poll.save(function(err, result){
                        if(err) console.log(err);
                        else res.json(result);
                    })
                } else if(req.body.optionNumber == 2){
                    let newTotal = poll.option2.votes++;
                    poll.save(function(err, result){
                        if(err) console.log(err);
                        else res.json(result);
                    })
                } else if(req.body.optionNumber == 3){
                    let newTotal = poll.option3.votes++;
                    poll.save(function(err, result){
                        if(err) console.log(err);
                        else res.json(result);
                    })
                } else if(req.body.optionNumber == 4){
                    let newTotal = poll.option4.votes++;
                    poll.save(function(err, result){
                        if(err) console.log(err);
                        else res.json(result);
                    })
                }
            }
        })
    },

    delete: function(req, res){
        Poll.findById(req.body.pollID, function(err, poll){
            if(err) console.log(err);
            else if(poll.asker != req.session.name) res.redirect('/main');
        });
        Poll.findByIdAndRemove(req.body.pollID, function(err, result){
            if(err) console.log(err);
            else res.json(result);
        });
    },

    search: function(req, res){
        Poll.find({question: {$in: [req.body.searchStr]}}, function(err, polls){
            if(err) console.log(err);
            else if(polls) res.json(polls);
        });
    }
}