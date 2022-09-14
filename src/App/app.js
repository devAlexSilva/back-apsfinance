"use strict";
exports.__esModule = true;
var express = require("express");
var server_1 = require("./server");
var Routes_1 = require("../Routes");
server_1.app.use(express.json());
server_1.app.use(Routes_1.route);
server_1.app.get("/", function (_req, res) { return res.send("APS-Finance"); });
