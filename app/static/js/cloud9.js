"use strict";

var fs = require('fs');
var path = require('path');
var exec = require('child_process').exec;

$( document ).ready(function() {
    console.log( "ready!" );

    exec("dir", function (err, stdout, stderr) {
        if (err !== null) {
            console.log('exec error: ' + err);
            return callback(err);
        }

    });

});