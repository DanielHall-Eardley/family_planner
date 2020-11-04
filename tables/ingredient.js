const table = `
CREATE TABLE IF NOT EXISTS ingredient (
  ingredient_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  ingredient_name VARCHAR(30) NOT NULL
);
`

module.exports = table