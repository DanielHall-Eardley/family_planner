const table = `
  CREATE TABLE IF NOT EXISTS alert (
    alert_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    alert_name VARCHAR(80) NOT NULL,
    alert_date TIMESTAMP NOT NULL,
    alert_type VARCHAR(8),
    alert_description TEXT,
    alert_img_url TEXT,
    alert_creator UUID REFERENCES member(member_id),
    family_id UUID REFERENCES family(family_id)
  );
`

module.exports = table