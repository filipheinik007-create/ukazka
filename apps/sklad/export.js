// Sklad – export inventury do CSV (rozpracováno)
function exportCsv(zasoby) {
  const radky = zasoby.map(z => `${z.product_id};${z.mnozstvi}`);
  return ['product_id;mnozstvi', ...radky].join('\n');
  // TODO: uložit do souboru s datem v názvu
}

module.exports = { exportCsv };
