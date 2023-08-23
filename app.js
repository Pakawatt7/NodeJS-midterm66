const  express = require('express')
const app = express()
const port = 8081
const bodyParser = require("body-parser")


require("./routes")(app)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))


app.get('/status', (req,res) => res.send('Hello midterm'))




app.listen(port, () => console.log(`Example app listening on port ${port}!`))