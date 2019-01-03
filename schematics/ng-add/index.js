"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const gestures_1 = require("./gestures");
const set_up_1 = require("./set-up");
const AUI_VERSION = require(`@alyle/ui/package.json`).version;
const ANGULAR_CORE_VERSION = require(`@angular/core/package.json`).version;
const HAMMERJS_VERSION = '^2.0.8';
const CHROMA_JS_VERSION = '^1.3.6';
/**
 * Sorts the keys of the given object.
 * @returns A new object instance with sorted keys
 */
function sortObjectByKeys(obj) {
    return Object.keys(obj).sort().reduce((result, key) => (result[key] = obj[key]) && result, {});
}
/** Add package */
function addPkg(tree, pkgName, version) {
    if (tree.exists(pkgName)) {
        const sourceText = tree.read(pkgName).toString('utf-8');
        const json = JSON.parse(sourceText);
        json.dependencies[pkgName] = version;
        json.dependencies = sortObjectByKeys(json.dependencies);
    }
}
// You don't have to export the function as default. You can also have more than one rule factory
// per file.
function ngAdd(_options) {
    return (tree, _context) => {
        addPkg(tree, '@angular/animations', ANGULAR_CORE_VERSION);
        addPkg(tree, '@alyle/ui', AUI_VERSION);
        addPkg(tree, 'chroma-js', CHROMA_JS_VERSION);
        if (_options.gestures) {
            addPkg(tree, 'hammerjs', HAMMERJS_VERSION);
            gestures_1.addHammerJsToMain(_options);
        }
        return schematics_1.chain([set_up_1.setUpAppModule(_options)]);
    };
}
exports.ngAdd = ngAdd;
//# sourceMappingURL=index.js.map