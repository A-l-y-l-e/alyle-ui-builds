"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts = require(process.cwd() + "/node_modules/typescript");
const util_1 = require("./util/util");
const parse_1 = require("./parse");
const REGEX_LY = () => /lyl\s?(`{{*[^]*?}`)/g;
const LYL_BAD_REGEX = /^{\n\s\*\s/;
const REPLACE_ID_REGEX = () => /\[ei([\w]+)\]/g;
const REPLACE_IMPORT_LYL = () => /import {[^}]*(lyl)[^}]*} from '[^']+';/g;
function styleCompiler(content) {
    let simpleStyles = 0;
    let complexStyles = 0;
    const result = content.replace(REGEX_LY(), (_ex, styleBlock) => {
        if (LYL_BAD_REGEX.test(styleBlock)) {
            return _ex;
        }
        simpleStyles++;
        const source = ts.createSourceFile('', styleBlock, ts.ScriptTarget.Latest, true);
        const templateExpression = util_1.findNode(source, ts.SyntaxKind.TemplateExpression);
        if (!templateExpression) {
            const cssContent = new parse_1.LylParse(styleBlock.slice(1, styleBlock.length - 1)).toCss();
            styleBlock = `(className: string) => \`${cssContent}\``;
            return styleBlock;
        }
        let nextID = 0;
        const data = {};
        const templates = [
            templateExpression.head.getFullText(),
            ...templateExpression.templateSpans
                .map(prop => {
                const id = createUniqueID(nextID++);
                data[id] = prop.expression.getFullText();
                return `${id}${prop.literal.getFullText().trim()}`;
            })
        ];
        const templateString = templates.join('');
        if (templateString.includes('...${')) {
            complexStyles++;
        }
        const css = new parse_1.LylParse(templateString.slice(1, templateString.length - 1)).toCss().replace(REPLACE_ID_REGEX(), (id) => data[id] || id);
        styleBlock = `(className: string) => \`${css}\``;
        return styleBlock;
    });
    return updateImport(result, simpleStyles, complexStyles);
}
exports.styleCompiler = styleCompiler;
function createUniqueID(count) {
    const ID = `${count}${Date.now().toString(36)}${Math.random().toString(36).slice(2)}`;
    return `[ei${ID}]`;
}
/**
 * If a string contains a lyl style
 * For testing purposes only
 * @param str content
 */
function hasLylStyle(str) {
    return REGEX_LY().test(str);
}
exports.hasLylStyle = hasLylStyle;
function updateImport(content, numSimpleStyles, numComplexStyles) {
    if (!(numSimpleStyles || numComplexStyles)) {
        return content;
    }
    return content.replace(REPLACE_IMPORT_LYL(), (full) => {
        const source = ts.createSourceFile('', full, ts.ScriptTarget.Latest, true);
        const importDeclaration = util_1.findNode(source, ts.SyntaxKind.ImportDeclaration);
        let imports = importDeclaration.importClause.namedBindings
            .elements.map((imp) => {
            return imp.getText();
        });
        const modulePath = importDeclaration.moduleSpecifier.getFullText();
        if ((numSimpleStyles && numComplexStyles) || numComplexStyles) {
            imports = imports.map(imp => imp === 'lyl' ? 'st2c' : imp);
        }
        else if (numSimpleStyles) {
            imports = imports.filter(imp => imp !== 'lyl');
        }
        return `import {\n  ${imports.join(`,\n  `)} } from ${modulePath.trim()};`;
    });
}
//# sourceMappingURL=compiler.js.map