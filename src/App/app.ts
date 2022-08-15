import express from 'express'
import { app } from "./server";


app.use(express.json())

app.get('/', (req, res) => res.send('APS-Finance'))