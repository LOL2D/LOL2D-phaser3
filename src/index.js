import App from './js/app';

function runApp() {
  const app = new App();
  app.start();
}

window.onload = () => {
  runApp();
};
