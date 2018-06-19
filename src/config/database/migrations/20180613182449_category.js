
exports.up = function(knex, Promise) {
    return knex.schema.createTable('Category', (table) =>{
        table.increments()
        table.text('nome')
        table.integer('categoriaPai').references('id').inTable('Category')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('Category')
};
