var express = require('express')
var app = express();
var parser = require('ua-parser-js');
var locale = require('locale');

app.get('/', function (req, res) {

    var ua = parser(req.headers['user-agent']);
    var ip = req.ip;
    var loc = req.headers["accept-language"];
    var obj = { "ipaddress": ip, "language": loc, "software": ua.browser.name + ", " + ua.os.name + " " + ua.os.version};
    res.end(JSON.stringify(obj, null, '  '));

});

var port = process.env.PORT || 3000;
app.listen(port);
