"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const styles_1 = require("../utils/styles");
function updateFiles(options) {
    return (host) => {
        const componentPath = host.actions.filter(action => action.path.endsWith('.component.ts'))[0].path;
        const buffer = host.read(componentPath).toString();
        // remove style blank
        host.overwrite(componentPath, buffer.replace(/\,?\n  styles: \[\]/, ''));
        return schematics_1.chain([
            styles_1.setUpStyles(options, componentPath)
        ]);
    };
}
function default_1(options) {
    const newOptions = Object.assign({}, options, { inlineStyle: true });
    return schematics_1.chain([
        schematics_1.externalSchematic('@schematics/angular', 'component', newOptions),
        updateFiles(newOptions)
    ]);
}
exports.default = default_1;
//# sourceMappingURL=index.js.map