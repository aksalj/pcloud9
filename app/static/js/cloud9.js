"use strict";

var fs = require('fs');
var path = require('path');
var spawn = require('child_process').exec;

var log = function (msg) {
    console.log(msg);
    $("#log").append("<span>" + msg + "<span></span><br>");
};

var startCloud9 = function (callback) {
    var windows = /^win/.test(process.platform);
    var cmd = windows ? "node cloud9/server.js" : "cloud9/bin/cloud9.sh";
    var c9 = spawn(cmd);

    c9.stdout.on('data', function (data) {
        log('stdout: ' + data);
        callback(null, data);
    });

    c9.stderr.on('data', function (data) {
        log('stderr: ' + data);
        callback(new Error('Cloud9 Error'), data);
    });

    c9.on('close', function (code) {
        log('child process exited with code ' + code);
        callback(code);
    });

};

$( document ).ready(function() {
    console.log( "ready!" );

    startCloud9(function (err, data) {

    });
});