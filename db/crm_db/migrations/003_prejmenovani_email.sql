-- crm_db: sjednocení názvu sloupce
-- POZOR: nekompatibilní změna – staré dotazy na sloupec "mail" přestanou fungovat.
ALTER TABLE customers RENAME COLUMN mail TO email;
