

const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 4000
var cors = require('cors')

app.use(cors())

const batchRoutes = require('./routes/batchRoutes')
const recordedsessionRoutes =  require('./routes/recordedsessionRoutes')
const studentRoutes =  require('./routes/studentRoutes')
const employeeRoutes =  require('./routes/employeeRoutes')
const productRoutes = require('./routes/productRoutes')


app.use(express.json())
app.use('/batches', batchRoutes)
app.use('/recorded-session', recordedsessionRoutes)
app.use('/student', studentRoutes)
app.use('/employee', employeeRoutes)
app.use('/product', productRoutes)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// connecting mongodb with express js


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://admin:r0TcF8ZOtaZQeCkq@cluster0.hprwx8x.mongodb.net/?retryWrites=true&w=majority');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}