/**
 * Purpose   : Replacing the string with the given user input.
 * 
 * @author   : Kumar Shubham
 * @version  : 1.0
 * @since    : 22-07-2018
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
    