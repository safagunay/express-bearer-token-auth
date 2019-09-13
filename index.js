const jwt = require("jsonwebtoken");
const bearerToken = require('express-bearer-token');
module.exports = (verifyOptions) => {
    let h1 = bearerToken();
    let h2 = (req, res, next) => {
        const TOKEN_KEY = process.env.TOKEN_KEY;
        if (!TOKEN_KEY) {
            throw new Error("Env variable \"TOKEN_KEY\" required!")
        }
        const accessToken = req.token;
        if (!accessToken) {
            return res.status(401).send();
        }
        var payload = null;
        try {
            payload = jwt.verify(accessToken, TOKEN_KEY, verifyOptions);
        } catch (err) {
            return res.status(401).send();
        }
        req.claims = payload;
        next();
    }
    return (req, res, next) => {
        h1(req, res, () => null);
        h2(req, res, next);
    }
}