const table = `
  CREATE TABLE IF NOT EXISTS meal_step (
    meal_id UUID NOT NULL REFERENCES meal(meal_id) ,
    step_no SMALLINT NOT NULL,
    instruction TEXT NOT NULL
  );
`

module.exports = table