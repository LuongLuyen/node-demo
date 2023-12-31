const express  = require("express")

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.urlencoded({extended: true}))
app.use(express.json())

// Add headers before the routes are defined
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', "*")
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    res.setHeader('Access-Control-Allow-Credentials', true)
    next()
})

app.get('/',(req,res)=>{
    res.send("<h1>Nodejs EC2</h1>")
})
 
app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})
