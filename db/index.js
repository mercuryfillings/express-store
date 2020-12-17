const mongoose = require('mongoose')


//need to update the uri when DB set up in atlas
let mongodb_URI = process.env.store_mongo || 'mongodb://127.0.0.1:27017/mongo_store_db'

mongoose
  .connect(mongodb_URI, { useUnifiedTopology: true, useNewURLparser: true }

