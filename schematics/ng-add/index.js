"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const tasks_1 = require("@angular-devkit/schematics/tasks");
const path_1 = require("path");
const gestures_1 = require("./gestures");
const set_up_1 = require("./set-up");
const AUI_VERSION = require(`@alyle/ui/package.json`).version;
const ANGULAR_CORE_VERSION = require(path_1.join(process.cwd(), 'package.json')).dependencies['@angular/core'];
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
function addPkg(host, pkgName, version) {
    if (host.exists('package.json')) {
        const sourceText = host.read('package.json').toString('utf-8');
        const json = JSON.parse(sourceText);
        json.dependencies[pkgName] = version;
        json.dependencies = sortObjectByKeys(json.dependencies);
        host.overwrite('package.json', JSON.stringify(json, null, 2));
    }
}
function installPkgs(_options) {
    return (host, _context) => {
        addPkg(host, '@angular/animations', ANGULAR_CORE_VERSION);
        addPkg(host, '@alyle/ui', `^${AUI_VERSION}`);
        addPkg(host, 'chroma-js', CHROMA_JS_VERSION);
        if (_options.gestures) {
            addPkg(host, 'hammerjs', HAMMERJS_VERSION);
        }
        _context.addTask(new tasks_1.NodePackageInstallTask());
    };
}
// You don't have to export the function as default. You can also have more than one rule factory
// per file.
function ngAdd(_options) {
    return schematics_1.chain([
        gestures_1.addHammerJsToMain(_options),
        set_up_1.setUpAppModule(_options),
        installPkgs(_options)
    ]);
}
exports.ngAdd = ngAdd;
//# sourceMappingURL=index.js.map