const table = `
  CREATE TABLE IF NOT EXISTS meal (
    meal_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    date DATE NOT NULL,
    family_member_id UUID REFERENCES family(family_id) 
  );
`

module.exports = table