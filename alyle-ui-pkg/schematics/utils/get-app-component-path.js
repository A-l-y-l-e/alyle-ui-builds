"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const project_targets_1 = require("@schematics/angular/utility/project-targets");
const ng_ast_utils_1 = require("@schematics/angular/utility/ng-ast-utils");
const ast_utils_1 = require("@schematics/angular/utility/ast-utils");
const ts = require("typescript");
const path_1 = require("path");
const core_1 = require("@angular-devkit/core");
const ast_1 = require("./ast");
function getAppComponentPath(host, options) {
    const projectTargets = project_targets_1.getProjectTargets(host, options.project);
    if (!projectTargets.build) {
        throw project_targets_1.targetBuildNotFoundError();
    }
    const mainPath = projectTargets.build.options.main;
    const modulePath = ng_ast_utils_1.getAppModulePath(host, mainPath);
    const moduleSource = ast_1.getTsSourceFile(host, modulePath);
    const decoratorMetadata = ast_utils_1.getDecoratorMetadata(moduleSource, 'NgModule', '@angular/core');
    const propertyName = 'bootstrap';
    const { properties } = decoratorMetadata[0];
    const property = properties
        .filter(prop => prop.kind === ts.SyntaxKind.PropertyAssignment)
        .filter((prop) => {
        const name = prop.name;
        switch (name.kind) {
            case ts.SyntaxKind.Identifier:
                return name.getText() === propertyName;
            case ts.SyntaxKind.StringLiteral:
                return name.text === propertyName;
        }
        return false;
    })[0];
    const bootstrapValue = (property.initializer.getText()).split(/\[|\]|\,\s?/g).filter(s => s)[0];
    const appComponentPath = moduleSource.statements
        .filter(prop => prop.kind === ts.SyntaxKind.ImportDeclaration)
        .filter(prop => ast_utils_1.findNode(prop, ts.SyntaxKind.ImportSpecifier, bootstrapValue))
        .map(({ moduleSpecifier }) => moduleSpecifier.text)[0];
    const mainDir = path_1.dirname(modulePath);
    return core_1.normalize(`/${mainDir}/${appComponentPath}.ts`);
}
exports.getAppComponentPath = getAppComponentPath;
//# sourceMappingURL=get-app-component-path.js.map