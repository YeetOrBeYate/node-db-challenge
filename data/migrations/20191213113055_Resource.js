exports.up = function(knex) {
    return knex.schema.createTable('Resource', tbl=>{
        tbl.increments();

        tbl.string('Name',200)
        .notNullable();

        tbl.text('Description')
        .nullable();

        
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Resource')
  
};