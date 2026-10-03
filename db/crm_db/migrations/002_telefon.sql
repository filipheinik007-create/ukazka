-- crm_db: telefon zákazníka (zpětně kompatibilní – sloupec je volitelný)
ALTER TABLE customers ADD COLUMN telefon TEXT NULL;
