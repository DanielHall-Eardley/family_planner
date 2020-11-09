const table = `
CREATE TABLE IF NOT EXISTS rec_event (
  rec_event_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  event_name VARCHAR(80) NOT NULL,
  description TEXT,
  img_url TEXT,
  creator_id UUID REFERENCES family_member(family_member_id)
);
`

module.exports = table

