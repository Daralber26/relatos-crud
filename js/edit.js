function inicializarEdicionHistorias() {
  const app = document.getElementById('app');

  const seccion = document.createElement('section');
  seccion.id = 'form-editar-container';
  seccion.style.display = 'none';
  seccion.innerHTML = `
    <h2>Editar historia</h2>
    <form id="form-editar">
      <input type="hidden" id="editar-id">
      <div>
        <label for="editar-titulo">Título</label>
        <input type="text" id="editar-titulo" required>
      </div>
      <div>
        <label for="editar-autor">Autor</label>
        <input type="text" id="editar-autor" required>
      </div>
      <div>
        <label for="editar-genero">Género</label>
        <input type="text" id="editar-genero" required>
      </div>
      <div>
        <label for="editar-sinopsis">Sinopsis</label>
        <textarea id="editar-sinopsis" required></textarea>
      </div>
      <div>
        <label for="editar-contenido">Contenido</label>
        <textarea id="editar-contenido" rows="8" required></textarea>
      </div>
      <button type="submit">Guardar cambios</button>
      <button type="button" id="btn-cancelar-editar">Cancelar</button>
    </form>
    <p id="mensaje-editar"></p>
  `;

  app.appendChild(seccion);

  document.getElementById('btn-cancelar-editar').addEventListener('click', () => {
    seccion.style.display = 'none';
  });

  document.getElementById('form-editar').addEventListener('submit', (e) => {
    e.preventDefault();

    const id = Number(document.getElementById('editar-id').value);
    const historias = getHistorias();
    const historia = historias.find(h => h.id === id);
    if (!historia) return;

    historia.titulo = document.getElementById('editar-titulo').value.trim();
    historia.autor = document.getElementById('editar-autor').value.trim();
    historia.genero = document.getElementById('editar-genero').value.trim();
    historia.sinopsis = document.getElementById('editar-sinopsis').value.trim();
    historia.contenido = document.getElementById('editar-contenido').value.trim();

    guardarHistorias(historias);
    renderizarListaHistorias();

    seccion.style.display = 'none';
    document.getElementById('mensaje-editar').textContent = 'Historia actualizada.';
  });
}

function abrirEdicion(id) {
  const historias = getHistorias();
  const historia = historias.find(h => h.id === id);
  if (!historia) return;

  document.getElementById('editar-id').value = historia.id;
  document.getElementById('editar-titulo').value = historia.titulo;
  document.getElementById('editar-autor').value = historia.autor;
  document.getElementById('editar-genero').value = historia.genero;
  document.getElementById('editar-sinopsis').value = historia.sinopsis;
  document.getElementById('editar-contenido').value = historia.contenido;

  document.getElementById('form-editar-container').style.display = 'block';
}