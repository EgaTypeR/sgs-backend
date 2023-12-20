const mongoose = require('mongoose')

const connectToMongoDB = () => {
  var Url = process.env.PUBLIC_DB_URL
  return mongoose.connect(Url)
  .then(
    () =>{
      console.log('Connected to Mongo DB')
    }
  )
  .catch(
    (err)=>{
      console.log('App starting error', err.message)
    }
  )
}

module.exports = connectToMongoDB