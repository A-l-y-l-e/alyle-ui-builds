"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tasks_1 = require("@angular-devkit/schematics/tasks");
const PKG = '@alyle/ui';
const AUI_VERSION = require(`${PKG}/package.json`).version;
// You don't have to export the function as default. You can also have more than one rule factory
// per file.
function ngAdd(_options) {
    return (tree, _context) => {
        if (tree.exists('package.json')) {
            const sourceText = tree.read('package.json').toString('utf-8');
            const json = JSON.parse(sourceText);
            json.dependencies[PKG] = AUI_VERSION;
            json.dependencies = sortObjectByKeys(json.dependencies);
        }
        _context.addTask(new tasks_1.NodePackageInstallTask());
    };
}
exports.ngAdd = ngAdd;
/**
 * Sorts the keys of the given object.
 * @returns A new object instance with sorted keys
 */
function sortObjectByKeys(obj) {
    return Object.keys(obj).sort().reduce((result, key) => (result[key] = obj[key]) && result, {});
}
//# sourceMappingURL=index.js.map