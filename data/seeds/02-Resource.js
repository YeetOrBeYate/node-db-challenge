
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Resource')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Resource').insert([
        { Name: 'Red Dye', Description: "This is for Shirts"},
        { Name: 'Blue Dye', Description: "This is for Pants"},
        { Name: 'Black Dye', Description: "This is for Socks"},
        { Name: 'Shirt Money', Description: "40,000 for shirts"},
        { Name: 'Pant Money', Description: "400,000 for pants"},
        { Name: 'Sock Money', Description: "4,000,000 for socks"}
      ]);
    });
};
