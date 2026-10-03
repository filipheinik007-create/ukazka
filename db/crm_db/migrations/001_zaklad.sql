-- crm_db: zákazníci
CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  jmeno TEXT NOT NULL,
  mail TEXT NOT NULL
);
