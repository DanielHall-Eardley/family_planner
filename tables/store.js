const table = `
  CREATE TABLE IF NOT EXISTS store (
    store_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(50) NOT NULL,
    address TEXT NOT NULL
  );
`

module.exports = table