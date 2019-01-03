"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer = require("inquirer");
const semver = require("semver");
const core_1 = require("@angular-devkit/core");
const ts = require("@schematics/angular/node_modules/typescript/lib/typescript");
const ast_utils_1 = require("@schematics/angular/utility/ast-utils");
const ng_ast_utils_1 = require("@schematics/angular/utility/ng-ast-utils");
const project_targets_1 = require("@schematics/angular/utility/project-targets");
const path_1 = require("path");
const rxjs_1 = require("rxjs");
const schematics_1 = require("@angular-devkit/schematics");
const tasks_1 = require("@angular-devkit/schematics/tasks");
checkVersionAngularCLI();
function checkVersionAngularCLI() {
    const version = require(path_1.join(process.cwd(), 'package.json')).devDependencies['@angular/cli'];
    if (!semver.satisfies(semver.coerce(version), '>=7.2.0-rc.0 || 7.2.x')) {
        throw new schematics_1.SchematicsException(`Alyle UI Schematics require "@angular/cli@>=7.2.0-rc.0 || 7.2.x"`);
    }
}
function updateAppModule(host, _context, options, themeName, themes) {
    _context.logger.debug('Updating appmodule');
    // find app module
    const projectTargets = project_targets_1.getProjectTargets(host, options.project);
    if (!projectTargets.build) {
        throw project_targets_1.targetBuildNotFoundError();
    }
    const mainPath = projectTargets.build.options.main;
    const modulePath = ng_ast_utils_1.getAppModulePath(host, mainPath);
    _context.logger.debug(`module path: ${modulePath}`);
    // add import animations
    let moduleSource = getTsSourceFile(host, modulePath);
    let importModule = 'BrowserAnimationsModule';
    let importPath = '@angular/platform-browser/animations';
    if (!ast_utils_1.isImported(moduleSource, importModule, importPath)) {
        const change = ast_utils_1.insertImport(moduleSource, modulePath, importModule, importPath);
        if (change) {
            const recorder = host.beginUpdate(modulePath);
            recorder.insertLeft(change.pos, change.toAdd);
            host.commitUpdate(recorder);
        }
    }
    // register animations in app module
    moduleSource = getTsSourceFile(host, modulePath);
    let metadataChanges = ast_utils_1.addSymbolToNgModuleMetadata(moduleSource, modulePath, 'imports', importModule);
    if (metadataChanges) {
        const recorder = host.beginUpdate(modulePath);
        metadataChanges.forEach((change) => {
            recorder.insertRight(change.pos, change.toAdd);
        });
        host.commitUpdate(recorder);
    }
    // add import theme
    ['LyThemeModule', 'LY_THEME'].forEach((_import) => {
        moduleSource = getTsSourceFile(host, modulePath);
        importModule = _import;
        importPath = '@alyle/ui';
        if (!ast_utils_1.isImported(moduleSource, importModule, importPath)) {
            const change = ast_utils_1.insertImport(moduleSource, modulePath, importModule, importPath);
            if (change) {
                const recorder = host.beginUpdate(modulePath);
                recorder.insertLeft(change.pos, change.toAdd);
                host.commitUpdate(recorder);
            }
        }
    });
    // register theme in app module
    const importText = `LyThemeModule.setTheme('${themeName}')`;
    moduleSource = getTsSourceFile(host, modulePath);
    metadataChanges = ast_utils_1.addSymbolToNgModuleMetadata(moduleSource, modulePath, 'imports', importText);
    if (!moduleSource.text.includes('LyThemeModule.setTheme') && metadataChanges) {
        const recorder = host.beginUpdate(modulePath);
        metadataChanges.forEach((change) => {
            recorder.insertRight(change.pos, change.toAdd);
        });
        host.commitUpdate(recorder);
    }
    themes.forEach(_themeName => {
        const [themePath] = _themeName.split('-');
        // register providers
        moduleSource = getTsSourceFile(host, modulePath);
        const simbolName = `{ provide: LY_THEME, useClass: ${core_1.strings.classify(_themeName)}, multi: true }`;
        metadataChanges = ast_utils_1.addSymbolToNgModuleMetadata(moduleSource, modulePath, 'providers', simbolName);
        if (metadataChanges) {
            const recorder = host.beginUpdate(modulePath);
            metadataChanges.forEach((change) => {
                recorder.insertRight(change.pos, change.toAdd);
            });
            host.commitUpdate(recorder);
        }
        // add import themes
        moduleSource = getTsSourceFile(host, modulePath);
        importModule = core_1.strings.classify(_themeName);
        importPath = `@alyle/ui/themes/${themePath}`;
        if (!ast_utils_1.isImported(moduleSource, importModule, importPath)) {
            const change = ast_utils_1.insertImport(moduleSource, modulePath, importModule, importPath);
            if (change) {
                const recorder = host.beginUpdate(modulePath);
                recorder.insertLeft(change.pos, change.toAdd);
                host.commitUpdate(recorder);
            }
        }
    });
}
function getTsSourceFile(host, path) {
    const buffer = host.read(path);
    if (!buffer) {
        throw new schematics_1.SchematicsException(`Could not read file (${path}).`);
    }
    const content = buffer.toString();
    const source = ts.createSourceFile(path, content, ts.ScriptTarget.Latest, true);
    return source;
}
// You don't have to export the function as default. You can also have more than one rule factory
// per file.
function setUpAppModule(_options) {
    return (host, _context) => {
        return new rxjs_1.Observable((_) => {
            if (_options.themes.length > 1) {
                inquirer
                    .prompt([
                    {
                        type: 'list',
                        name: 'selectedTheme',
                        message: 'Set Theme',
                        choices: _options.themes
                    },
                ])
                    .then(({ selectedTheme }) => {
                    const themes = _options.themes;
                    updateAppModule(host, _context, _options, selectedTheme, themes);
                    _.next(host);
                    _.complete();
                    _context.addTask(new tasks_1.NodePackageInstallTask());
                });
            }
            else {
                const selectedTheme = [..._options.themes, 'minima-light'][0];
                updateAppModule(host, _context, _options, selectedTheme, [selectedTheme]);
                _.next(host);
                _.complete();
                _context.addTask(new tasks_1.NodePackageInstallTask());
            }
        });
    };
}
exports.setUpAppModule = setUpAppModule;
//# sourceMappingURL=set-up.js.map