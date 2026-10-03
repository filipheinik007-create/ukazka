# Mapa produktů a databází

Tento soubor je „mapa“: který produkt používá kterou databázi a tabulku.
Když PR mění DB, aktualizuj i tuto tabulku.

| Produkt | Složka        | Databáze  | Tabulky                 | Vlastník |
|---------|---------------|-----------|-------------------------|----------|
| Eshop   | `apps/eshop/` | eshop_db  | products, orders        | @filipheinik007-create |
| CRM     | `apps/crm/`   | crm_db    | customers (+ telefon)   | @filipheinik007-create |
| Sklad   | `apps/sklad/` | sklad_db  | stock                   | @filipheinik007-create |

## Vazby mezi databázemi

- `eshop_db.orders.customer_id` → `crm_db.customers.id`
- `sklad_db.stock.product_id` → `eshop_db.products.id`

Změna v `crm_db.customers` proto může ovlivnit i **Eshop**,
změna v `eshop_db.products` může ovlivnit i **Sklad**.

## Jak poznám, co se změnilo

- **Na čem se pracuje:** záložka *Issues* (filtr podle labelu `produkt:*`) nebo tabule v *Projects*.
- **Co mění DB:** pull requesty s labelem `typ:migrace` a `db:*`.
- **Co se vydalo:** záložka *Releases*, poznámky jsou rozdělené podle typu změny.
