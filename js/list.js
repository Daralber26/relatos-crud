function inicializarListaHistorias() {
  const app = document.getElementById('app');

  const seccion = document.createElement('section');
  seccion.innerHTML = `
    <h2>Historias guardadas</h2>
    <div id="lista-historias"></div>
  `;

  app.appendChild(seccion);

  renderizarListaHistorias();
}

function renderizarListaHistorias() {
  const contenedor = document.getElementById('lista-historias');
  const historias = getHistorias();

  if (historias.length === 0) {
    contenedor.innerHTML = '<p>No hay historias guardadas todavía.</p>';
    return;
  }

  contenedor.innerHTML = historias.map(h => `
    <article class="tarjeta-historia" data-id="${h.id}">
      <h3>${h.titulo}</h3>
      <p><strong>Autor:</strong> ${h.autor} | <strong>Género:</strong> ${h.genero} | <strong>Fecha:</strong> ${h.fecha}</p>
      <p>${h.sinopsis}</p>
    </article>
  `).join('');
}