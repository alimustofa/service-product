'use strict'

const getListUseCase = require('./usecase/getList') 
const updateQtyUseCase = require('./usecase/updateQty')

const Service = (repository) => {

    const getList = getListUseCase(repository)
    const updateQty = updateQtyUseCase(repository)

    return {
        list: async (call, cb) => {
            const { page, size } = call.request
            const list = await getList(page, size)

            cb(null, { products: list })
        },
        updateQty: async (call, cb) => {
            const { id, quantity } = call.request
            const upd = await updateQty(id, quantity)

            cb(null, upd)
        },
    }
}

module.exports = Service
