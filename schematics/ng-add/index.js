"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const tasks_1 = require("@angular-devkit/schematics/tasks");
const path_1 = require("path");
const gestures_1 = require("./gestures");
const set_up_1 = require("./set-up");
const fonts_1 = require("./fonts");
const get_app_component_path_1 = require("../utils/get-app-component-path");
const styles_1 = require("../utils/styles");
const get_project_name_1 = require("../utils/get-project-name");
let AUI_VERSION;
try {
    AUI_VERSION = require(`@alyle/ui/package.json`).version;
}
catch (error) {
    AUI_VERSION = '*';
}
let ANGULAR_CORE_VERSION;
try {
    ANGULAR_CORE_VERSION = require(path_1.join(process.cwd(), 'package.json')).dependencies['@angular/core'];
}
catch (error) {
    ANGULAR_CORE_VERSION = '*';
}
const HAMMERJS_VERSION = '^2.0.8';
const CHROMA_JS_VERSION = '^2.0.2';
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
function installPkgs(options) {
    return (host, _context) => {
        _context.logger.debug('installPkgs');
        addPkg(host, '@angular/animations', ANGULAR_CORE_VERSION);
        addPkg(host, '@alyle/ui', `^${AUI_VERSION}`);
        addPkg(host, 'chroma-js', CHROMA_JS_VERSION);
        if (options.gestures) {
            addPkg(host, 'hammerjs', HAMMERJS_VERSION);
        }
        _context.addTask(new tasks_1.NodePackageInstallTask());
    };
}
function default_1(options) {
    const STYLES = `\n\nconst STYLES = (theme: ThemeVariables) => ({
  '@global': {
    body: {
      backgroundColor: theme.background.default,
      color: theme.text.default,
      fontFamily: theme.typography.fontFamily,
      margin: 0,
      direction: theme.direction
    }
  }
});`;
    return (host) => {
        options.project = options.project || get_project_name_1.getDefaultProjectName(host);
        return schematics_1.chain([
            gestures_1.addHammerJsToMain(options),
            set_up_1.setUpAppModule(options),
            fonts_1.addFontsToIndex(options),
            styles_1.setUpStyles(options, get_app_component_path_1.getAppComponentPath(host, options), STYLES),
            installPkgs(options)
        ]);
    };
}
exports.default = default_1;
//# sourceMappingURL=index.js.map