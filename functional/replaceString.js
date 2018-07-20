/*
  */
var prompt = require('prompt');
var utility = require('../utility/utility.js')
prompt.start();
var string = 'Hello <<UserName>>';
prompt.get(['username'],function(err, input){
    if(err){
        return 0;
    }
    var value = utility.stringReplace(string, input.username);
    console.log(value);
});
    