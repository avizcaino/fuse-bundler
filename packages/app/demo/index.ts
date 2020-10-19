(async () => {
  //@ts-ignore
  (() => import('@webcomponents/webcomponentsjs/webcomponents-loader'))();
  document.addEventListener('WebComponentsReady', async () => {
    console.log('WebComponentsReady');
    const appImporter = (): Promise<{ default: any }> => import('../src/app');
    const App = await appImporter();
    const app = new App.default();
    document.body.appendChild(app as HTMLElement);
  });
})();
