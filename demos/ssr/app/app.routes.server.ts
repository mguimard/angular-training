import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'page-1',
    renderMode: RenderMode.Client
  },
  {
    path: 'page-2',
    renderMode: RenderMode.Client
  },
  {
    path: 'page-3',
    renderMode: RenderMode.Server
  }
];
