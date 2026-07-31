const STORAGE_KEY = 'relatos';

function getHistorias() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

function guardarHistorias(historias) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(historias));
}