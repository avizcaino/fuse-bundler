const { fuse } = require('../../node_modules/@uxland/project-tools/fuse/start');
const pkg = require('./package.json');
fuse('demo/index.ts', '../styles/styles.scss', 'demo/index.html', false).runProd({
  uglify: true,
  target: 'browser',
  bundles: {
    app: './app.$hash.js',
    mapping: [
      { matching: 'webcomponents*', target: './vendor.webcomponents.$hash.js' },
      { matching: 'material*', target: './vendor.material.$hash.js' },
    ],
    vendor: './vendor.$hash.js',
  },
});
