import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();
const app = express();
const port = process.env.PORT || 2727;
app.use(cors());

app.listen(port, () => console.log(`⚙️ http://localhost:${port} `));

export { app };
