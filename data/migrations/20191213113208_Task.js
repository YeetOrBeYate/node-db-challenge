exports.up = function(knex) {
    return knex.schema.createTable('Task', tbl=>{
        tbl.increments();

        tbl.text('Description')
        .notNullable();

        tbl.string('Note',200)
        .nullable();

        tbl.boolean('Completed')
        .notNullable()
        .defaultTo(false);

        tbl.integer("Project_Id")
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('Project')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Task')
  
};
