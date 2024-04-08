const Product = require('../models/product.model')
// const logger = require('../logger/logger')
const productService = require('../services/product.services')

exports.findAll = async(req, res) => {
  console.log("Find all products")
  try {
    const result = await productService.findAll()
    res.status(200).json({data: result})
    // logger.debug("Success in reading all users")
    // logger.info("Success in reading all users")
  } catch (err) {
    console.log(`Problem in reading users ${err}`)
    // logger.error(`Problem in reading all users , ${err}`)
  }
}

exports.findOne = async(req, res) => {
    console.log("Find one product")
    const productName = req.params.product
    console.log(productName)
    try {
      const result = await productService.findOne({productName})
      res.status(200).json({data: result})
    } catch (err) {
      console.log(`Problem in reading product, ${err}`)
    }
}

exports.create = async(req, res) => {
  console.log("Insert one product")
  console.log(req.body)


  const newProduct = new Product ({
    product: req.body.product,
    cost: req.body.cost,
    description: req.body.description,
    quantity: req.body.quantity
  })

  try{
    const result = await productService.create(newProduct)
    res.status(200).json({data: result})
    console.log("Product saved")
  } catch(err) {
    res.status(400).json({data: err})
    console.log("Problem in saving product")
  }
}

exports.update = async(req, res) => {
  const productToBeUpdated = req.params.product

  console.log("Update product : ", productToBeUpdated)

  // const updateProduct = {
  //   product: productToBeUpdated,
  //   cost: req.body.cost,
  //   description: req.body.description,
  //   quantity: req.body.quantity
  // }

  try{
    const result = await productService.update(req.body)
    res.status(200).json({data: result})
    console.log("Success in updating product", productToBeUpdated)
  } catch(err) {
    res.status(400).json({data: err})
    console.log("Problem in updating product: ", productToBeUpdated)
  }
}

exports.delete = async(req, res) => {
  const productToBeDeleted = req.params.product
  console.log("Delete product: ", productToBeDeleted)

  try{
    console.log(productToBeDeleted)
    const result = await productService.deleteProduct(productToBeDeleted)
    res.status(200).json({data: result})
    console.log("Product successfully Deleted", product)
  } catch(err) {
    res.json({data: err})
    console.log("Problem in deleting product")
  }
}

