
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Task')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Task').insert([
        { Description: "Buy Shirts", Note: "Lovely Idea", Project_Id: 1},
        { Description: "Dye the shirts", Note: " Very Lovely Idea", Project_Id: 1},
        { Description: "Buy Pants", Note: "Okayish Idea", Project_Id: 2},
        { Description: "Dye the pants", Note: "Kinda Okayish Idea", Project_Id: 2},
        { Description: "By Socks", Note: "Bad Idea", Project_Id: 3},
        { Description: "Dye the socks", Note: "Kinda Bad Idea", Project_Id: 3}
      ]);
    });
};
