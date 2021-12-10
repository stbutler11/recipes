const pug = require('pug');
const yaml = require('js-yaml');
const fs   = require('fs');


// Get document, or throw exception on error
try {
    const doc = yaml.load(fs.readFileSync('espresso-martini.yml', 'utf8'));
    console.log(doc);
    console.log(pug.renderFile('template.pug', { recipes: [doc] }));
  } catch (e) {
    console.log(e);
  }