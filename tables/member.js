const table = `
CREATE TABLE IF NOT EXISTS member (
  member_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  member_name VARCHAR(30) NOT NULL,
  member_role VARCHAR(20) NOT NULL,
);
`

module.exports = table