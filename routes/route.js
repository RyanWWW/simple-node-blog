module.exports = function (app) {
    //ignode '/favicon.ico'
    app.get('/favicon.ico', function (req, res) {
        res.status(204);
    });
    app.get('/', function (req, res) {
        res.redirect('/index');
    });
    //index page
    app.use('/index', require('./index'));
    //post page
    app.use('/post', require('./post'));
}