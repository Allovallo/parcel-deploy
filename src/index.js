var ghpages = require('gh-pages');

ghpages.publish('dist', {
  branch: 'main',
  repo: 'https://github.com/Allovallo/parcel-deploy.git'
}, callback);