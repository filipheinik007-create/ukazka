// Eshop – výpočet ceny košíku
function cenaKosiku(polozky) {
  return polozky.reduce((soucet, p) => soucet + p.cena * p.pocet, 0);
}

const HRANICE_DOPRAVY_ZDARMA = 1500;

function cenaDopravy(cenaZbozi) {
  return cenaZbozi >= HRANICE_DOPRAVY_ZDARMA ? 0 : 99;
}

module.exports = { cenaKosiku, cenaDopravy };
