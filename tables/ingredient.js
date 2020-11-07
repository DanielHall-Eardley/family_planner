const table = `
CREATE TABLE IF NOT EXISTS ingredient (
  ingredient_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(30) NOT NULL,
  quantity SMALLINT NOT NULL,
  unit VARCHAR(6)
);
`

module.exports = table