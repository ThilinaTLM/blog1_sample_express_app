const express = require('express')

const app = express();
app.use((req, res) => res.send("<h1>Hellow from express</h1>"))

app.listen(8000, () => console.log("Listening... 8000"))
