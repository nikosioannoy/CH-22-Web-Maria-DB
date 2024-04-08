const productEntity = require('../models/Product').ProductEntity
const dataSource = require('../connect').dataSource

async function findAll() {
  const result = await dataSource
    .getRepository(productEntity)
    .createQueryBuilder()
    .select("product")
    .from(productEntity, 'product')
    .getMany()

    return result
}

async function findOne(productName) {
  console.log(productName)
  const result = await dataSource
    .getRepository(productEntity)
    .createQueryBuilder()
    .select("product")
    .from(productEntity, 'product')
    .where("product.product = :productName", { productName: productName.productName })
    .getOne()

    return result
}

async function create(newProduct) {
  const result = await dataSource
    .getRepository(productEntity)
    .createQueryBuilder()
    .insert()
    .into(productEntity)
    .values({
      product: newProduct.product,
      cost: newProduct.cost,
      description: newProduct.description,
      quantity: newProduct.quantity
    })
    .execute()
    .catch(error => console.log(error))
    return result
}

async function update(newProduct) {
  const result = await dataSource
    .getRepository(productEntity)
    .createQueryBuilder()
    .update(productEntity)
    .set({product: newProduct.product,
          cost: newProduct.cost,
          description: newProduct.description,
          quantity: newProduct.quantity})
    .where("product = :product", {product: newProduct.product})
    .execute()
    .catch(error => console.log(error))
    return result
}

async function deleteProduct(productToBeDeleted) {
  const result = await dataSource
    .getRepository(productEntity)
    .createQueryBuilder()
    .delete()
    .from(productEntity)
    .where("product = :product", { product: productToBeDeleted })
    .execute()
    .catch(error => console.log(error))
    return result
}

module.exports = {findAll, findOne, create, update, deleteProduct}