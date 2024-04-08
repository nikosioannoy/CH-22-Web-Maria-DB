const typeorm = require('typeorm')

const UserEntity = require('./models/User').UserEntity
const ProductEntity = require('./models/Product').ProductEntity

const dataSource = new typeorm.DataSource({
  type: 'mariadb',
  host: process.env.HOST,
  port: 3306, 
  username: process.env.DBUSER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  synchronize: true, //Dimiourgia sthn DB tous pinakes kai tous endiamesous opou xreiazontai
  entities: [UserEntity, ProductEntity] 
})

dataSource
  .initialize()
  .then( function() {
    console.log("Connected to database")
  })
  .catch( function(error) {
    console.log("Problem in connecting to database", error)
  })

  module.exports = { dataSource }