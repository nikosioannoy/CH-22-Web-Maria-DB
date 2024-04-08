const EntitySchema = require('typeorm').EntitySchema

const ProductEntity = new EntitySchema({
  name: "Product", //Onoma pinaka
  target: "Product", //Onoma gia anafora ston pinaka
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true
    },
    product: {
      type: "varchar"
    },
    cost: {
      type: "double"
    },
    description: {
      type: "varchar"
    },
    quantity: {
      type: "int"
    }
  },
  relation: {
    products: {
      target: "User",
      type: "many-to-many",
      joinTable: true,
      cascade: true
    }
  }
})

module.exports = { ProductEntity } //Export to ProductEntity