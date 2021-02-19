
exports.seed = function(knex) {
      return knex('recipes').insert([
        {food_id:1, cooking_id: 1},
        {food_id:2, cooking_id: 2},
        {food_id:3, cooking_id: 3}
      ]);
};
