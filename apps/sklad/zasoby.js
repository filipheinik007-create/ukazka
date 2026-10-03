// Sklad – stav zásob (DB: sklad_db, tabulka stock)
function odepisZasobu(zasoba, pocet) {
  return { ...zasoba, mnozstvi: zasoba.mnozstvi - pocet };
}

module.exports = { odepisZasobu };
