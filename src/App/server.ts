import "dotenv/config";
import * as express from "express";
import * as cors from "cors";

const app = express();
const port = process.env.PORT || 2727;
app.use(cors());

app.listen(port, () => console.log(`⚙️ http://localhost:${port} `));

export { app };
