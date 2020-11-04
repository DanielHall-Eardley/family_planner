const table = `
  CREATE TABLE IF NOT EXISTS ing_list (
    ingredient_id UUID NOT NULL REFERENCES ingredient(ingredient_id) ,
    meal_id UUID NOT NULL REFERENCES meal(meal_id) 
  );
`

module.exports = table