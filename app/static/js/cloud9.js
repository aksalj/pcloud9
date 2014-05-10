"use strict";

var fs = require('fs');
var path = require('path');
var child = require('child_process');

var log = function (msg) {
    console.log(msg);
    $("#log").append("<span>" + msg + "<span></span><br>");
};

/*var startCloud9 = function (callback) {
    var platform = process.platform, cmd = "/usr/local/bin/node", params = ["./cloud9/server.js", "-a"];
    if (/win/.test(platform) || /darwin/.test(platform)) {
        params.push('open');
    } else if (/linux/.test(platform)) {
        params.push("x-www-browser");
    }

    var out = fs.openSync('./runtime/out.log', 'a');
    var err = fs.openSync('./runtime/out.log', 'a');

    var cp = child.spawn(cmd, params, { detached: true, stdio: [ 'ignore', out, err ] });

    cp.unref();

    callback();

};

$(document).ready(function () {

    startCloud9(function (err, data) {
        window.location = "http://localhost:3131";
    });

});*/