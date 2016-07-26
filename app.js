var httpProxy = require('http-proxy');
app.use('/app/js', express.static('WebContent/js'));
app.use('/app/css', express.static('WebContent/css'));
app.use('/app/etc', express.static('WebContent/etc'));

app.route('/app/*$').all(function (req, res) { // proxy all requests
    proxy.web(req, res, { target: 'http://proxy-server:7001' }); //sandbox
});
var proxy = httpProxy.createProxyServer(function (req, res) {
    proxy.web(req, res, { target: 'http://192.168.1.18:7900/' });
});