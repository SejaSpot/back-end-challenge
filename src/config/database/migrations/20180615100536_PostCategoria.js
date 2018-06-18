
exports.up = function(knex, Promise) {
    return knex.schema.createTable('PostCategory', (table) =>{
        table.increments()
        table.integer('idPost').references('id').inTable('Post').onDelete('CASCADE');
        table.integer('idCategoria').references('id').inTable('Category').onDelete('CASCADE');
        
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('PostCategory')
};
