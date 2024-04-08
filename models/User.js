const EntitySchema = require('typeorm').EntitySchema

const UserEntity = new EntitySchema({
  name: "User", //Onoma pinaka
  target: "User", //Onoma gia anafora ston pinaka
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true
    },
    username: {
      type: "varchar"
    },
    password: {
      type: "varchar"
    },
    name: {
      type: "varchar"
    },
    surname: {
      type: "varchar"
    },
    email: {
      type: "varchar"
    },
    addressId: {
      type: "int"
    }
  }
})

module.exports = { UserEntity } //Export to ProductEntity