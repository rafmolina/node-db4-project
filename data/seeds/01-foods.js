
exports.seed = function(knex) {
      return knex('foods').insert([
        {food_name: 'orange juice'},
        {food_name: 'tequila'},
        {food_name: 'hotdog'}
      ]);
};
