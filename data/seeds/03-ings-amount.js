
exports.seed = function(knex) {
      return knex('cooking').insert([
        {cooking_name: 'squeeze', ing_id: 1},
        {cooking_name: 'age', ing_id: 2},
        {cooking_name: 'grill', ing_id: 4},
        {cooking_name: 'heat up', ing_id: 3},
      ]);
};
