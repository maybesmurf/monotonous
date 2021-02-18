"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileTemplate = void 0;
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
const path_1 = tslib_1.__importDefault(require("path"));
const handlebars_1 = tslib_1.__importDefault(require("handlebars"));
/**
 * @name compileTemplate
 * Gets the html template as a string from the build directory
 * and compiles it as a handlebars template.
 */
function compileTemplate(name) {
    const tplPath = path_1.default.resolve(__dirname, '../../dist');
    const tpl = fs_1.default.readFileSync(`${tplPath}/${name}.html`).toString();
    return handlebars_1.default.compile(tpl);
}
exports.compileTemplate = compileTemplate;
//# sourceMappingURL=compile_template.js.map