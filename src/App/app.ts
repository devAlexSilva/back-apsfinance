import express from "express";
import { app } from "./server";
import { route } from "../Routes";
import cors from 'cors'

app.use(express.json());
app.use(cors)


app.use(route);
app.get("/", (req, res) => res.send("APS-Finance"));

