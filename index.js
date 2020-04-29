'use strict'

require('dotenv').config()

const grpc = require('grpc')
const protoLoader = require('@grpc/proto-loader');

const port = process.env.PORT || 9001

// utils
const { initDb, getEvmDbMaster } = require('./utils/db')
// routes
const productRoutes = require('./src/product/route')


const packageDefinition = protoLoader.loadSync('src/product/proto/product.proto');
const productProto = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server()

initDb(async err => {
    if (err) throw err
    // product route
    const productRoute = productRoutes()

    server.addService(productProto.ProductService.service, productRoute)

    server.bind(`127.0.0.1:${port}`,  grpc.ServerCredentials.createInsecure())
    console.log(`Server running at http://127.0.0.1:${port}`)
    
    server.start()
})