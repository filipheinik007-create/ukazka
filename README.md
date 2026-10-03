# Moje cesta ke GitHubu

Cvičný repozitář, ve kterém se učím používat Git a GitHub od začátku.

Každý commit popisuje jednu srozumitelnou změnu.

## Co si vyzkouším

- ukládání změn pomocí commitů,
- práci s větvemi,
- nahrání repozitáře na GitHub,
- vytvoření pull requestu a sloučení změn.

## První cvičení

1. Uprav tento soubor.
2. Zobraz změny příkazem `git diff`.
3. Připrav změnu příkazem `git add README.md`.
4. Ulož ji příkazem `git commit -m "Upravuji README"`.

---

## Ukázka týmového workflow

Repo zároveň slouží jako ukázka, jak evidovat **co se vydalo**, **na čem se pracuje**
a **co změna ovlivňuje** (produkty a databáze).

| Kde                 | Co tam najdeš |
|---------------------|---------------|
| `apps/`             | tři ukázkové produkty: eshop, crm, sklad |
| `db/`               | databáze a jejich migrace (změny schématu) |
| `docs/SCHEMA.md`    | mapa produkt → databáze → tabulky |
| `.github/`          | šablony issue a PR, automatické labely, release notes, CODEOWNERS |
| záložka *Issues*    | zadání úkolů |
| záložka *Pull requests* | rozpracované a sloučené změny |
| záložka *Releases*  | vydané verze s poznámkami |
