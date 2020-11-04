const table = `
  rec_event_id UUID NOT NULL REFERENCES rec_event(rec_event_id),
  start TIMESTAMP NOT NULL,
  end TIMESTAMP NOT NULL,
`

module.exports = table