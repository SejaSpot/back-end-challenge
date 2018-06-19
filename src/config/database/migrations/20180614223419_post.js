exports.up = function(knex, Promise) {
    return knex.schema.createTable('Post', (table) =>{
        table.increments()
        table.string('titulo')
        table.text('conteudo')
        table.dateTime('dataPublicacao')
        table.integer('idAutor').references('id').inTable('Author')
        table.integer('visualizacoes')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('Post')
};
