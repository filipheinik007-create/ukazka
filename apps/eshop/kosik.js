// Eshop – výpočet ceny košíku
function cenaKosiku(polozky) {
  return polozky.reduce((soucet, p) => soucet + p.cena * p.pocet, 0);
}

function cenaDopravy() {
  return 99;
}

module.exports = { cenaKosiku, cenaDopravy };
