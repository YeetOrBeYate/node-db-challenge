
exports.up = function(knex) {
    return knex.schema.createTable('Project_Resource', tbl=>{

        tbl.primary(["Project_Id", "Resource_Id"]);

        tbl.integer("Project_Id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("Project")
        .onUpdate('CASCADE')
        .onDelete('CASCADE');

        tbl.integer("Resource_Id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("Resource")
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Project_Resource')
  
};