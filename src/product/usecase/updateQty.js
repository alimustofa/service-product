'use strict'

module.exports = (repository) => async (id, qty) => {
    const response = await repository.updateQty(id, qty)
    
    return response
}
