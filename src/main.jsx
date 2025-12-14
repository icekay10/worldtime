// src/main.jsx
import { createApp as createAppFactory } from 'vite-ssg';
import App from './_app';
import routes from './routes';

export const createApp = createAppFactory({
  App,
  routes,
});