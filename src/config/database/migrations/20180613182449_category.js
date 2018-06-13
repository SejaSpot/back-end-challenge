
exports.up = function(knex, Promise) {
    return knex.schema.createTable('Category', (table) =>{
        table.increments()
        table.integer('id').unsigned()
        table.text('nome')
        table.foreign('categoriaPai').references('id')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('Category')
};
