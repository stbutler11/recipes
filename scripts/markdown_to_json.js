/**
 * Converts very specific markdown to JSON.
 * 
 * @param {string} markdown The markdown to parse
 * 
 * It should have the following structure:
 * `
 * Name of recipe
 * ----------------
 * 
 * ![Image of recipe](image.jpg)
 * 
 * # Ingredients
 *   - Item 1
 *   - Item 2
 * 
 * # Method
 *   - Step 1
 *   - Step 2
 * `
 * 
 * @returns {object} The json object
 * {
 *   title: "Name of recipe",
 *   img: "image.jpg",
 *   ingredients: ["Item 1", "Item 2"],
 *   method: ["Step 1", "Step 2"]
 * }
 * 
 * 
 */

function parse(markdown) {
  const lines = markdown.split('\n').filter(line => line.trim().length);
  const imageLine = lines.find(line => line.includes("!["));
  const ingredientsIndex = lines.findIndex(line => line.includes("# Ingredients"));
  const methodIndex = lines.findIndex(line => line.includes("# Method"));
  return {
      title: lines[0],
      img: imageLine.slice(imageLine.indexOf('(') + 1, imageLine.indexOf(')')),
      ingredients: extractListItems(lines, ingredientsIndex, methodIndex),
      method: extractListItems(lines, methodIndex)
  };
}

function extractListItems(lines, from, to) {
  const isListItem = line => line.trim().startsWith('-');
  const cleanupLine = line => line.trim().slice(1);
  return lines.slice(from, to).filter(isListItem).map(cleanupLine);
}

module.exports.parse = parse;
