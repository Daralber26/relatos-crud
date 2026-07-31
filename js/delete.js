function eliminarHistoria(id) {
  const confirmar = confirm('¿Seguro que quieres eliminar esta historia? Esta acción no se puede deshacer.');
  if (!confirmar) return;

  const historias = getHistorias();
  const historiasFiltradas = historias.filter(h => h.id !== id);

  guardarHistorias(historiasFiltradas);
  renderizarListaHistorias();
}