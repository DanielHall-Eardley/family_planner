const table = `
  CREATE TABLE IF NOT EXISTS takeaway_order (
    takeaway_id UUID NOT NULL REFERENCES takeaway(takeaway_id),
    family_member_id UUID NOT NULL REFERENCES family_member(family_member_id),
    food TEXT NOT NULL
  );
`

module.exports = table