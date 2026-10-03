-- eshop_db: základní tabulky
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  nazev TEXT NOT NULL,
  cena NUMERIC(10,2) NOT NULL
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  customer_id INT NOT NULL,      -- odkaz na crm_db.customers
  stav TEXT NOT NULL DEFAULT 'nova',
  vytvoreno TIMESTAMP NOT NULL DEFAULT now()
);
