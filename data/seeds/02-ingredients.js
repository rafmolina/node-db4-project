
exports.seed = function(knex) {
      return knex('ingredients').insert([
        {ing_name: 'orange'},
        {ing_name: 'agave'},
        {ing_name: 'buns'},
        {ing_name: 'weenies'}
      ]);
};
