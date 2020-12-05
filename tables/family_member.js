const table = `
CREATE TABLE IF NOT EXISTS family_member (
  family_member_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  family_id UUID NOT NULL REFERENCES family(family_id),
  first_name VARCHAR(30) NOT NULL,
  relation_type VARCHAR(15) NOT NULL,
  birth_date DATE NOT NULL,
  email TEXT NOT NULL
);
`

module.exports = table