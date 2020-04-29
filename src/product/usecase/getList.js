'use strict'

module.exports = (repository) => async (page, size) => {
    const response = await repository.list(page, size)

    return response
}
