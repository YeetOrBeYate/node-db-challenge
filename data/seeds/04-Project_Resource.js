
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Project_Resource')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Project_Resource').insert([
        {Project_Id: 1, Resource_Id: 1},
        {Project_Id: 1, Resource_Id: 4},
        {Project_Id: 2, Resource_Id: 2},
        {Project_Id: 2, Resource_Id: 5},
        {Project_Id: 3, Resource_Id: 3},
        {Project_Id: 3, Resource_Id: 6},
      ]);
    });
};
