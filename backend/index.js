const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require("mongoose");
const User = require('./UserSchema')


const uri = "mongodb://localhost:27017/CodeHaven";
mongoose.set('strictQuery', true);
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Connected to MongoDB")
}).catch((err) => {
    console.log(err)
})




const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/users', async(req, res) => {
    const {email, password, confirmPassword, username} = req.body;
    console.log(email, password, confirmPassword, username)
    const user = new User({
        email, password, username})
    if(password !== confirmPassword){
        console.log("Passwords do not match")
        res.status(401).json({message: "Passwords do not match"})
    }
    let oldUserEmail = await User.findOne({email});
    if(oldUserEmail){
        console.log("User already exists")
        res.status(401).json({message: "User already exists"})
    }
    else{
        await user.save();
        console.log("User created")
        res.status(200).json({message: "User created"})
    }
}
)


app.post('/login', async(req, res) => {
    const {email, password} = req.body;
    const auth = false;
    if(User.findById(email)){
        console.log("User found")
        res.status(200).json({auth: true})
    }
    else{
        console.log("User not found")
        res.status(401).json({auth: false})
    }
});


app.listen(5000, () => {
    console.log('Server is running on port 5000')
})