// Eshop – objednávky (DB: eshop_db, tabulka orders)
const STAVY = ['nova', 'zaplacena'];

function zmenStav(objednavka, novyStav) {
  if (!STAVY.includes(novyStav)) throw new Error('Neznámý stav: ' + novyStav);
  return { ...objednavka, stav: novyStav };
}

module.exports = { STAVY, zmenStav };
