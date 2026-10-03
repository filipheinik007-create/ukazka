// Eshop – objednávky (DB: eshop_db, tabulka orders)
const STAVY = ['nova', 'zaplacena', 'odeslana'];

function zmenStav(objednavka, novyStav) {
  if (!STAVY.includes(novyStav)) throw new Error('Neznámý stav: ' + novyStav);
  const zmena = { ...objednavka, stav: novyStav };
  if (novyStav === 'odeslana') zmena.odeslano = new Date();
  return zmena;
}

module.exports = { STAVY, zmenStav };
