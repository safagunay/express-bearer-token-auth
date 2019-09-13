#### Description
Express middleware for bearer token authentication with jwt.
Env variable "TOKEN_KEY" is required, otherwise throws Error.
verifyOptions parameter is not required. [Refer to jsonwebtoken package site](https://www.npmjs.com/package/jsonwebtoken) for available options.
Populates req.claims with payload part of jwt if verified.
If bearer token can not be verified, responds the request with the status 401.
#### Usage
> **const express = require("express");
const app = express();
const auth = require('express-bearer-token-auth');
const verifyOptions = { algorithm:  'RS256' };
app.use(auth(verifyOptions));**
