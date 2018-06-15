
exports.up = function(knex, Promise) {
    return knex.schema.createTable('PostCategory', (table) =>{
        table.increments()
        table.integer('idPost').references('id').inTable('Post')
        table.integer('idCategory').references('id').inTable('Category')
        
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('PostCategory')
};
