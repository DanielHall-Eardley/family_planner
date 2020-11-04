const table = `
CREATE TABLE IF NOT EXISTS family_member (
  family_id UUID NOT NULL REFERENCES family(family_id) ,
  member_id UUID NOT NULL REFERENCES member(member_id)
);
`

module.exports = table