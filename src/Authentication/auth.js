"use strict";
exports.__esModule = true;
exports.Authentication = void 0;
var jwt = require("jsonwebtoken");
var SignPrismaRepository_1 = require("../Modules/login/model/SignPrismaRepository");
var Authentication = function (req, res, next) {
    var token = req.headers.authorization;
    if (!token)
        return res.status(401).json({ error: "token is required" });
    var isValidToken = token.replace("Bearer ", "");
    jwt.verify(isValidToken, SignPrismaRepository_1.secret, function (err, decoded) {
        if (err)
            return res.status(401).json({ error: "invalid token" });
        var deco = decoded;
        req.params.id = deco.id;
        next();
    });
};
exports.Authentication = Authentication;
