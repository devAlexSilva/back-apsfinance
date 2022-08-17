import express from "express";
import { app } from "./server";
import { route } from "../Routes";

app.use(express.json());

app.get("/", (req, res) => res.send("APS-Finance"));

app.use(route);
