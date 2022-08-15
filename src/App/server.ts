import express from "express"

const app = express()
const port = process.env.PORT || 2727

app.listen(port, () => console.log(`⚙️ http://localhost:${port} `))

export { app }