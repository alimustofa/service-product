'use strict'

const Service = require('./service')
const Repository = require('./repository')
const Controller = require('./controller')

const Route = () => {

    const ProductRepo = Repository()
    const ProductService = Service(ProductRepo)
    const ProductController = Controller(ProductService)

    return ProductController
}

module.exports = Route