'use strict'

const { getEvmDbMaster } = require('../../utils/db')
const Model = require('./model/model')

const Repository = () => {
    const evmDb = getEvmDbMaster()
    const model = Model(evmDb)

    return {
        list: async(page, size) => {
            const list = model.list(page, size)
            
            return list
        },

        updateQty: async(id, qty) => {
            const result = model.updateQty(id, qty)
            
            return result
        }
    }
}

module.exports = Repository
