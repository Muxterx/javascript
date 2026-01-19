import { routes } from './routes.js';

export function router(render) {
  const route = location.hash || '#/home';
  const view = routes[route] || routes['#/home'];

  render(view());
}
