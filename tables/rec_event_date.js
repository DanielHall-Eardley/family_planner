const table = `
  CREATE TABLE IF NOT EXISTS rec_event_date (
    rec_event_id UUID NOT NULL REFERENCES rec_event(rec_event_id),
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    date DATE NOT NULL
  );
`

module.exports = table