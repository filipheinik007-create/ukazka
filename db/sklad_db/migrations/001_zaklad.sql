-- sklad_db: skladové zásoby
CREATE TABLE stock (
  product_id INT PRIMARY KEY,    -- odkaz na eshop_db.products
  mnozstvi INT NOT NULL DEFAULT 0
);
