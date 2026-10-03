-- eshop_db: datum odeslání objednávky
ALTER TABLE orders ADD COLUMN odeslano TIMESTAMP NULL;
