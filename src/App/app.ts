import * as express from "express";
import { app } from "./server";
import { route } from "../Routes";

app.use(express.json());
app.use(route);
app.get("/", (_req: express.Request, res: express.Response) => res.send("APS-Finance"));
