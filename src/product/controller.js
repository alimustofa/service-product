'use strict'

const Controller = (service) => {
    const { list, updateQty } = service

    return {
        list,
        updateQty
    }
}
    

module.exports = Controller