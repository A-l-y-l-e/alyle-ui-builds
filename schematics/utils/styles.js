"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts = require("typescript");
const schematics_1 = require("@angular-devkit/schematics");
const project_targets_1 = require("@schematics/angular/utility/project-targets");
const ast_1 = require("../utils/ast");
const ast_utils_1 = require("@schematics/angular/utility/ast-utils");
/** Adds the styles to the src/app/app.component.ts file. */
function setUpStyles(options, filePath, content) {
    return (host) => {
        const projectTargets = project_targets_1.getProjectTargets(host, options.project);
        if (!projectTargets.build) {
            throw project_targets_1.targetBuildNotFoundError();
        }
        const buffer = host.read(filePath);
        if (buffer === null) {
            throw new schematics_1.SchematicsException(`Could not read index file: ${filePath}`);
        }
        // add import style
        ast_1.addImport(host, filePath, ['LyTheme2', 'ThemeVariables'], '@alyle/ui');
        let component = getComponentOrDirective(host, filePath);
        const componentStartPos = component.decorators[0].pos;
        const defaultContentStyle = `\n\nconst STYLES = (_theme: ThemeVariables) => ({ });`;
        const recorder = host.beginUpdate(filePath);
        recorder.insertLeft(componentStartPos, content || defaultContentStyle);
        host.commitUpdate(recorder);
        component = getComponentOrDirective(host, filePath);
        const hasConstructor = component.members
            .some(prop => (prop.kind === ts.SyntaxKind.Constructor) && !!prop.body);
        let constructor;
        let __recorder = host.beginUpdate(filePath);
        const propertyValue = `\n  readonly classes = this.theme.addStyleSheet(STYLES);\n`;
        const constructorCall = `  constructor(\n    private theme: LyTheme2\n  ) { }\n`;
        const OpenBraceTokenPos = ast_utils_1.findNodes(component, ts.SyntaxKind.OpenBraceToken)
            .filter(prop => prop.parent === component).map(prop => prop.end)[0];
        __recorder.insertLeft(OpenBraceTokenPos, propertyValue);
        host.commitUpdate(__recorder);
        __recorder = host.beginUpdate(filePath);
        component = getComponentOrDirective(host, filePath);
        if (hasConstructor) {
            constructor = getContructor(component);
            const pos = ast_utils_1.findNodes(constructor, ts.SyntaxKind.OpenParenToken)
                .filter(prop => prop.parent === constructor).map(prop => prop.end)[0];
            if (constructor.parameters.length) {
                __recorder.insertLeft(pos, `\n    private theme: LyTheme2,\n  `);
            }
            else {
                __recorder.insertLeft(pos, `\n    private theme: LyTheme2\n  `);
            }
        }
        else if (component.members.length) {
            const latestPropertyDeclarationEnd = component.members
                .filter(prop => prop.kind === ts.SyntaxKind.PropertyDeclaration)
                .map(({ end }) => end).reverse()[0];
            __recorder.insertLeft(latestPropertyDeclarationEnd, `\n\n${constructorCall}`);
        }
        else {
            __recorder.insertLeft(OpenBraceTokenPos, constructorCall);
        }
        host.commitUpdate(__recorder);
        component = getComponentOrDirective(host, filePath);
        constructor = getContructor(component);
        ast_1.prettierConstructorParameters(host, filePath, constructor);
        return host;
    };
}
exports.setUpStyles = setUpStyles;
function getComponentOrDirective(host, filePath) {
    const fileSource = ast_1.getTsSourceFile(host, filePath);
    return ast_utils_1.findNodes(fileSource, ts.SyntaxKind.ClassDeclaration, 1)
        .filter(prop => prop.decorators)
        .filter(prop => prop.decorators.filter(decorator => decorator.getText().startsWith('@Component') ||
        decorator.getText().startsWith('@Directive')))[0];
}
function getContructor(componentOrDirective) {
    return componentOrDirective.members
        .filter(prop => prop.kind === ts.SyntaxKind.Constructor)[0];
}
//# sourceMappingURL=styles.js.map