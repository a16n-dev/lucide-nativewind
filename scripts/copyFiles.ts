import fs from 'fs'

import pkgData from '../package.json' assert { type: 'json' };

const newPkgData = JSON.parse(JSON.stringify(pkgData));

// Delete scripts
delete newPkgData.scripts;
// Delete devDependencies
delete newPkgData.devDependencies;
delete newPkgData.type;

// Set entry points
newPkgData.main = 'cjs/index.js';
newPkgData.module = 'esm/index.js';
newPkgData.types = 'types/index.d.ts';

// Overwrite original `package.json` with new data (i.e. minus the specific data).
fs.writeFile('dist/package.json', JSON.stringify(newPkgData, null, 2), (err: any) => {
  if (err) throw err;
});

// copy LICENSE and README
fs.copyFileSync('LICENSE', 'dist/LICENSE')
fs.copyFileSync('README.md', 'dist/README.md')
