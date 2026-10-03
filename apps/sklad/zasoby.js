// Sklad – stav zásob (DB: sklad_db, tabulka stock)
function odepisZasobu(zasoba, pocet) {
  return { ...zasoba, mnozstvi: zasoba.mnozstvi - pocet };
}

// Volá se, když Eshop označí objednávku jako odeslanou
function odepisObjednavku(zasoby, polozky) {
  return polozky.map(p => odepisZasobu(zasoby[p.productId], p.pocet));
}

module.exports = { odepisZasobu, odepisObjednavku };
