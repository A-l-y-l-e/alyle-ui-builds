"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const ts = require("typescript");
const ast_utils_1 = require("@schematics/angular/utility/ast-utils");
function getTsSourceFile(host, path) {
    const buffer = host.read(path);
    if (!buffer) {
        throw new schematics_1.SchematicsException(`Could not read file (${path}).`);
    }
    const content = buffer.toString();
    const source = ts.createSourceFile(path, content, ts.ScriptTarget.Latest, true);
    return source;
}
exports.getTsSourceFile = getTsSourceFile;
function addImport(host, filePath, importModule, path) {
    let importModules;
    if (typeof importModule === 'string') {
        importModules = [importModule];
    }
    else {
        importModules = importModule;
    }
    // add import theme
    importModules.forEach((val) => {
        const fileSource = getTsSourceFile(host, filePath);
        const importPath = path;
        if (!ast_utils_1.isImported(fileSource, val, importPath)) {
            const change = ast_utils_1.insertImport(fileSource, filePath, val, importPath);
            if (change) {
                const recorder = host.beginUpdate(filePath);
                recorder.insertLeft(change.pos, change.toAdd);
                host.commitUpdate(recorder);
            }
        }
    });
}
exports.addImport = addImport;
function prettierConstructorParameters(host, filePath, constructor) {
    const parenToken = constructor.getChildren()
        .filter(prop => prop.kind === ts.SyntaxKind.OpenParenToken || prop.kind === ts.SyntaxKind.CloseParenToken);
    // .map(prop => prop.getFullText().trim());
    const buffer = host.read(filePath);
    if (buffer === null) {
        throw new schematics_1.SchematicsException(`Could not read index file: ${filePath}`);
    }
    const syntaxList = constructor.getChildren()
        .filter(prop => prop.kind === ts.SyntaxKind.SyntaxList)[0];
    const contructorBefore = `${parenToken[0].getFullText()}${syntaxList.getFullText()}${parenToken[1].getFullText()}`;
    const parameters = syntaxList.getChildren()
        .filter(prop => prop.kind === ts.SyntaxKind.Parameter)
        .map((parameter, index) => {
        const param = parameter.getText();
        let comment = parameter.getFullText().replace(param, '').trim();
        if (comment) {
            comment += `\n`;
            if (index === 0) {
                comment += `\n${comment}`;
            }
        }
        return `${comment}${param}`;
    });
    const parametersStr = parameters.join(`,\n${` `.repeat(14)}`);
    const result = `${parenToken[0].getFullText().trim()}${parametersStr}${parenToken[1].getFullText().trim()}`;
    host.overwrite(filePath, buffer.toString().replace(contructorBefore, result));
}
exports.prettierConstructorParameters = prettierConstructorParameters;
//# sourceMappingURL=ast.js.map