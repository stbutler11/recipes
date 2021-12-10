/**
 * Converts very specific markdown to JSON.
 * It's assumed that the markdown has the following structure
 * 
 * <pre>
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
 * 
 * </pre>
 */

const regex = /^(.*)--.*![.*]\((.*)\).*# (Ingr)
export default function(markdown) {
    
}