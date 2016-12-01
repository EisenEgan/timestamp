var express = require('express')
var app = express()
app.get('/:time', function(req,res) {
    var time = req.params.time
    var unix, normal;
    var parsedDate = Date.parse(time);
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    if (Number.isInteger(parseInt(time))) {
        unix = new Date(parseInt(time))
        normal = months[unix.getMonth()] + " " + unix.getDate() + ", " + unix.getFullYear();
    }
    else if (Number.isInteger(parsedDate)) {
        normal = time
        unix = new Date(Date.parse(time))
    }
    else {
        normal = null;
        unix = null;
    }
    res.json({unix: (unix==null)?unix:unix.getTime(), natural: normal});
})

app.listen(8080, function() {
    console.log('Example app listening on port 8080!')
})