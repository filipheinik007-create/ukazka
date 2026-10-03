// CRM – evidence zákazníků (DB: crm_db, tabulka customers)
function novyZakaznik(jmeno, email, telefon = null) {
  return { jmeno, email, telefon };
}

module.exports = { novyZakaznik };
