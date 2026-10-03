// Eshop – výpočet ceny košíku
function cenaKosiku(polozky) {
  return polozky.reduce((soucet, p) => soucet + p.cena * p.pocet, 0);
}

const SLEVA_VERNY = 0.05;
const MIN_OBJEDNAVEK_PRO_SLEVU = 6;

function slevaProZakaznika(cenaZbozi, pocetObjednavek) {
  return pocetObjednavek >= MIN_OBJEDNAVEK_PRO_SLEVU ? cenaZbozi * SLEVA_VERNY : 0;
}

const HRANICE_DOPRAVY_ZDARMA = 1500;

function cenaDopravy(cenaZbozi) {
  return cenaZbozi >= HRANICE_DOPRAVY_ZDARMA ? 0 : 99;
}

module.exports = { cenaKosiku, cenaDopravy, slevaProZakaznika };
