function inicializarLectorHistorias() {
  const app = document.getElementById('app');

  const seccion = document.createElement('section');
  seccion.id = 'lector-historia';
  seccion.style.display = 'none';
  seccion.innerHTML = `
    <button id="btn-cerrar-lector">← Volver</button>
    <h2 id="lector-titulo"></h2>
    <p id="lector-meta"></p>
    <p id="lector-sinopsis"></p>
    <hr>
    <div id="lector-contenido"></div>
  `;

  app.appendChild(seccion);

  document.getElementById('btn-cerrar-lector').addEventListener('click', () => {
    seccion.style.display = 'none';
  });
}

function abrirHistoria(id) {
  const historias = getHistorias();
  const historia = historias.find(h => h.id === id);
  if (!historia) return;

  document.getElementById('lector-titulo').textContent = historia.titulo;
  document.getElementById('lector-meta').textContent =
    `Autor: ${historia.autor} | Género: ${historia.genero} | Fecha: ${historia.fecha}`;
  document.getElementById('lector-sinopsis').textContent = historia.sinopsis;
  document.getElementById('lector-contenido').textContent = historia.contenido;

  document.getElementById('lector-historia').style.display = 'block';
}