require('dotenv').config()
const knex = require('knex')

const knexInstance = knex({
    client: 'pg',
    connection: process.env.DB_URL
})

function seatchByProduceName(searchTerm){
knexInstance
    .select('product_id', 'name', 'price', 'cateory')
    .from('amazong_products')
    .where( 'name', 'ILIKE', `%${seatchTerm}%`)
    .then(result => {
        console.log(result)
})
}

seatchByProduceName('holo')


