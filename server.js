const express = require("express");
const app = express();
const port= 8000;
app.get("/", (req, res) => {""
    res.send("Se debe acceder a traves de un navegador web")
})

app.listen(port, () => console.log(`Listening on port: ${port}`));