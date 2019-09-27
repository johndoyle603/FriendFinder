let express = require("express");
let path = require("path")
let app = express();
let port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use(express.static("app/public"));

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

console.log('Server is listening on port ' + port);