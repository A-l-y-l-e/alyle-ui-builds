"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const styles_1 = require("../utils/styles");
function updateFiles(options) {
    return (host) => {
        const directivePath = host.actions.filter(action => action.path.endsWith('.directive.ts'))[0].path;
        const buffer = host.read(directivePath).toString();
        // remove style blank
        host.overwrite(directivePath, buffer.replace(/\,?\n  styles: \[\]/, ''));
        return schematics_1.chain([
            styles_1.setUpStyles(options, directivePath)
        ]);
    };
}
function default_1(options) {
    const newOptions = Object.assign({}, options, { inlineStyle: true });
    return schematics_1.chain([
        schematics_1.externalSchematic('@schematics/angular', 'directive', newOptions),
        updateFiles(newOptions)
    ]);
}
exports.default = default_1;
//# sourceMappingURL=index.js.map