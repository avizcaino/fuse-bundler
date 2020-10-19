const { fuse } = require('../../node_modules/@uxland/project-tools/fuse/start');
fuse('demo/index.ts', '../styles/styles.scss', 'demo/index.html', true).runDev();
