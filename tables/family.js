const table = `
CREATE TABLE IF NOT EXISTS family (
  family_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  family_name VARCHAR(30) NOT NULL
);
`

module.exports = table