const pug = require('pug');
const yaml = require('js-yaml');
const fs   = require('fs');
const markdownToJson = require('./markdown_to_json');

const recipes = fs.readdirSync('./recipes')
  .filter(filename => filename.endsWith('.md'))
  .map(filename => fs.readFileSync(`./recipes/${filename}`, 'utf8').toString())
  .map(markdownToJson.parse)


console.log(pug.renderFile('./scripts/template.pug', { recipes }));
