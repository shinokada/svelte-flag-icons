import fs from 'fs';

const files = fs.readdirSync('./dist').filter((file) => file.endsWith('.svelte'));

const exports = {
  '.': {
    types: './dist/index.d.ts',
    svelte: './dist/index.js',
  },
};
files.forEach((file) => {
  if (file !== 'index.svelte') {
    const name = file.replace('.svelte', '');
    exports[`./${name}.svelte`] = {
      types: `./dist/${name}.svelte.d.ts`,
      svelte: `./dist/${name}.svelte`,
    };
  } else {
    exports[`./${file}`] = `./dist/${file}`;
  }
});

const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
packageJson.exports = exports;

fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2));
