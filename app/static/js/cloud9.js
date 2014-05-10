"use strict";

var fs = require('fs');
var path = require('path');
var child = require('child_process');

var IDE_URL = "http://localhost:3131";

var log = function (msg) {
    console.log(msg);
    $("#log").append("" + msg);
};

var startCloud9 = function (onStarted, onError, onExit) {
    var platform = process.platform, cmd = "/usr/local/bin/node", params = ["./cloud9/server.js", "-a"];
    if (/win/.test(platform) || /darwin/.test(platform)) {
        params.push('open');
    } else if (/linux/.test(platform)) {
        params.push("x-www-browser");
    }

    var cp = child.spawn(cmd, params);
    cp.stdout.on('data', function (data) {
        var str = data.toString();
        log(data);
        if (str.indexOf("Listening on") > -1) {
            onStarted();
        }
    });

    cp.stderr.on('data', onError);
    //cp.on('exit', onExit);
    cp.on('close', onExit);
    //cp.on('error', onError);

};

var hideFrame = function (callback) {
    $('#frame').hide(function () {
        if (callback) {
            callback();
        }
    });
};

var showFrame = function (callback) {
    $('#frame').show(function () {
        if (callback) {
            callback();
        }
    });
};

var init = function () {
    showFrame(function () {
        $("#frame").attr('src', IDE_URL);
    });
};

var error = function (message) {
    log(message);
    //hideFrame();
};

var exit = function (code) {
    log("IDE exit: " + code);
    hideFrame();
};

$(document).ready(function () {
    startCloud9(init, error, exit);
});