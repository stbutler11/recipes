const pug = require('pug');
const yaml = require('js-yaml');
const fs   = require('fs');

const recipes = fs.readdirSync('.')
  .filter(file => file.endsWith('.yml'))
  .map(file => yaml.load(fs.readFileSync(file, 'utf8')))

console.log(recipes);
console.log(pug.renderFile('template.pug', { recipes }));
