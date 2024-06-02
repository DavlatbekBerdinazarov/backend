function logger(req, res, next) {
    console.log('logger request');
    next();
}

module.exports = logger;