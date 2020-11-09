const table = `
  CREATE TABLE IF NOT EXISTS alert (
    alert_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(80) NOT NULL,
    date TIMESTAMP NOT NULL,
    type VARCHAR(8) NOT NULL,
    description TEXT,
    img_url TEXT,
    creator_id UUID NOT NULL REFERENCES family_member(family_member_id)
  );
`

module.exports = table