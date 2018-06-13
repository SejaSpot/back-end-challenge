
exports.up = function(knex, Promise) {
    return knex.schema.createTable('Author', (table) =>{
        table.increments()
        table.text('nome')
        table.text('sobre')
        table.text('usuario')
        table.text('senha')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('Author')
};
