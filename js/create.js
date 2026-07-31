function inicializarFormularioCreacion() {
  const app = document.getElementById('app');

  const seccion = document.createElement('section');
  seccion.innerHTML = `
    <h2>Nueva historia</h2>
    <form id="form-crear">
      <div>
        <label for="titulo">Título</label>
        <input type="text" id="titulo" required>
      </div>
      <div>
        <label for="autor">Autor</label>
        <input type="text" id="autor" required>
      </div>
      <div>
        <label for="genero">Género</label>
        <input type="text" id="genero" required>
      </div>
      <div>
        <label for="sinopsis">Sinopsis</label>
        <textarea id="sinopsis" required></textarea>
      </div>
      <div>
        <label for="contenido">Contenido</label>
        <textarea id="contenido" rows="8" required></textarea>
      </div>
      <button type="submit">Publicar historia</button>
    </form>
    <p id="mensaje-crear"></p>
  `;

  app.appendChild(seccion);

  const form = document.getElementById('form-crear');
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const titulo = document.getElementById('titulo').value.trim();
    const autor = document.getElementById('autor').value.trim();
    const genero = document.getElementById('genero').value.trim();
    const sinopsis = document.getElementById('sinopsis').value.trim();
    const contenido = document.getElementById('contenido').value.trim();

    if (!titulo || !autor || !genero || !sinopsis || !contenido) {
      document.getElementById('mensaje-crear').textContent = 'Todos los campos son obligatorios.';
      return;
    }

    const nuevaHistoria = {
      id: Date.now(),
      titulo,
      autor,
      genero,
      sinopsis,
      contenido,
      fecha: new Date().toLocaleDateString()
    };

    const historias = getHistorias();
    historias.push(nuevaHistoria);
    guardarHistorias(historias);

    form.reset();
    document.getElementById('mensaje-crear').textContent = 'Historia publicada con éxito.';
  });
}