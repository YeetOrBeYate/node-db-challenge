
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Project')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Project').insert([
        { Name: 'Shirt Company', Description: "This is to make Shirts"},
        { Name: 'Pants Company', Description: "This is to make Pants"},
        { Name: 'Socks Company', Description: "This is to make Socks"}
      ]);
    });
};
