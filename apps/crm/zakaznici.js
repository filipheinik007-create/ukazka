// CRM – evidence zákazníků (DB: crm_db, tabulka customers)
function novyZakaznik(jmeno, email) {
  return { jmeno, email };
}

module.exports = { novyZakaznik };
