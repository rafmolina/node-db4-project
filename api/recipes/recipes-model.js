const db = require('../../data/db-config')

function get() {
    return db('recipes')
}

module.exports = {
    get,
}