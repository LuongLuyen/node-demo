const express  = require("express")
const app = express()
const PORT = process.env.PORT || 5000
const UserDB = require('./Model/modelUser')
app.use(express.urlencoded({extended: true}))
app.use(express.json())
const mongoose = require('mongoose')
require('dotenv').config()

app.use(function (req, res, next) { 
    res.setHeader('Access-Control-Allow-Origin', "*")
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    res.setHeader('Access-Control-Allow-Credentials', true)
    next()
})
mongoose.set("strictQuery", true)
const connectMongoDB = async () => {
	try {
        const uri = `mongodb+srv://luyen123:luyen123@cluster0.34dqtod.mongodb.net/?retryWrites=true&w=majority`
		await mongoose.connect(
			uri,
		)
		console.log("[LOG]",'MongoDB kết nối thành công')
	} catch (error) {
		console.log("[ERROR]",error.message)
		process.exit(1)
	}
}
connectMongoDB()

app.post('/user', (req,res)=>{
    try {
        const { name, userName, password,email,role} = req.body
        const data = new UserDB({ name, userName, password,email, role})
        data.save(data)
        res.json(data)
    } catch (error) {
        res.json(error)
    }
})

app.get('/user', async (req,res)=>{
    try {
        const data= await UserDB.find()
        res.json(data)
    } catch (error) {
        res.json(error)
    }
})

app.put('/user/:id', async (req,res)=>{

    try {
        await UserDB.updateOne({_id:req.params.id}, req.body)
        res.json(req.body)
    } catch (error) {
        res.json(error)
    }
})
app.delete('/user/:id', async (req,res)=>{

    try {
        const id = req.params.id
        await UserDB.deleteOne({ _id:id })
        const data= await UserDB.find()
        res.json(data)
    } catch (error) {
        res.json(error)
    }
})

app.get('/',(req,res)=>{
    res.send("<h1> Deploy nodejs EC2 </h1>")
})
 
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})
