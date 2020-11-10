const table = `
  CREATE TABLE IF NOT EXISTS takeaway (
    takeaway_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    family_member_id UUID NOT NULL REFERENCES family_member(family_member_id),
    store_id UUID NOT NULL REFERENCES store(store_id),
    date TIMESTAMP NOT NULL
  );
`

module.exports = table