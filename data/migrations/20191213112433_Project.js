
exports.up = function(knex) {
    return knex.schema.createTable('Project', tbl=>{
        tbl.increments();

        tbl.string('Name',200)
        .notNullable();

        tbl.text('Description')
        .nullable();

        tbl.boolean('Completed')
        .notNullable()
        .defaultTo(false);
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Project')
  
};
