import fs from 'fs';
import path from 'path';
import Handlebars from 'handlebars';

/**
 * @name compileTemplate
 * Gets the html template as a string from the build directory
 * and compiles it as a handlebars template.
 */
export function compileTemplate(name) {
  const tplPath = path.resolve(__dirname, '../../compiled_templates');
  const tpl = fs.readFileSync(`${tplPath}/${name}.html`).toString();
  return Handlebars.compile(tpl);
}
