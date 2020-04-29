'use strict'

const Model = (db) => ({
    list: async(page, size) => {
        const limit = page * size;
        const offset = limit - size;

        const q = `
            select 
                id, name, quantity
            from evm.product limit ? offset ?`
        let [list] = await db.raw(q, [limit, offset])
        list = JSON.parse(JSON.stringify(list))
        
        return list
    },

    updateQty: async(id, qty) => {
        const q = `
            update 
                evm.product
            set quantity = ?
            where id = ?`
        let result = await db.raw(q, [qty, id])
        
        return result
    },
})


module.exports = Model
