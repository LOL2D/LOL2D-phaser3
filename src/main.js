import './styles/main.css';
import { App } from './app/app';

function runApp() {
  const app = new App();
  app.start();
}

window.onload = function () {
  runApp();
};