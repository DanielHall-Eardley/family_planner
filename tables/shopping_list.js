const table = `
  CREATE TABLE IF NOT EXISTS shopping_list (
    meal_id UUID NOT NULL REFERENCES meal(meal_id),
    ingredient_id UUID NOT NULL REFERENCES ingredient(ingredient_id)
  );
 `

module.exports = table