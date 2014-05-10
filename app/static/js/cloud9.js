"use strict";

var fs = require('fs');
var path = require('path');
var spawn = require('child_process').spawn;

var log = function (msg) {
    console.log(msg);
    $("#log").append("<span>" + msg + "<span></span><br>");
};

var startCloud9 = function (callback) {

    var c9 = spawn('node', ['cloud9/server.js']);

    c9.stdout.on('data', function (data) {
        log('stdout: ' + data);
    });

    c9.stderr.on('data', function (data) {
        log('stderr: ' + data);
    });

    c9.on('close', function (code) {
        log('child process exited with code ' + code);
    });

};

$( document ).ready(function() {
    console.log( "ready!" );

    var files = fs.readdirSync(process.cwd());
    files.forEach( function(item) {
        log(item);
    });
});