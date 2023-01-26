const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/users', (req, res) => {
    const {email, password, confirmPassword, username} = req.body;
    console.log(email, password, confirmPassword, username)
}
)

app.listen(5000, () => {
    console.log('Server is running on port 5000')
})