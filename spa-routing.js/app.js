const app = document.getElementById('app');

function renderHome() {
  app.innerHTML = '<h1> Home</h1>';
}

function renderServices() {
  app.innerHTML = '<h1> Servicios</h1>';
}

function renderContact() {
  app.innerHTML = '<h1>📩 Contacto</h1><p>clan@hamilton.dev</p>';
}

function renderNotFound() {
  app.innerHTML = '<h1> 404</h1><p>Página no encontrada</p>';
}

function router() {
  const route = location.hash;

  switch (route) {
    case '#/home':
      renderHome();
      break;
    case '#/services':
      renderServices();
      break;
    case '#/contact':
      renderContact();
      break;
    default:
      renderHome();
  }
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);