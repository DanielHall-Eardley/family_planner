const table = `
CREATE TABLE IF NOT EXISTS family (
  family_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  family_name VARCHAR(30) NOT NULL,
  family_password TEXT NOT NULL,
  family_code INT NOT NULL
);
`

module.exports = table