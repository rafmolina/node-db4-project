
exports.up = function(knex) {
  return knex.schema
  .createTable("foods", tbl=>{
      tbl.increments("food_id")
      tbl.string("food_name",128).notNullable().unique()
  })
  .createTable("ingredients", tbl=>{
      tbl.increments("ing_id")
      tbl.string("ing_name",128).notNullable().unique()
  })
  .createTable("cooking", tbl=>{
      tbl.increments("cooking_id")
      tbl.string("cooking_name",128).notNullable()
      tbl.integer("ing_id")
        .unsigned()
        .notNullable()
        .references("ing_id")
        .inTable("ingredients")
        .onDelete("RESTRICT")
  })
  .createTable("recipes", tbl=>{
      tbl.increments("recipes_id")
      tbl.integer("food_id")
        .unsigned()
        .notNullable()
        .references("food_id")
        .inTable("foods")
        .onDelete("RESTRICT")
    tbl.integer("cooking_id")
        .unsigned()
        .notNullable()
        .references("cooking_id")
        .inTable("cooking")
        .onDelete("RESTRICT")
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("recipes")
  .dropTableIfExists("cooking")
  .dropTableIfExists("ingredients")
  .dropTableIfExists("foods")
};
 