"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const project_targets_1 = require("@schematics/angular/utility/project-targets");
/** Adds the Roboto & Material Icons fonts to the index HTML file. */
function addFontsToIndex(options) {
    return (host) => {
        const projectTargets = project_targets_1.getProjectTargets(host, options.project);
        if (!projectTargets.build) {
            throw project_targets_1.targetBuildNotFoundError();
        }
        const indexPath = projectTargets.build.options.index;
        if (indexPath === undefined) {
            return host;
        }
        const buffer = host.read(indexPath);
        if (buffer === null) {
            throw new schematics_1.SchematicsException(`Could not read index file: ${indexPath}`);
        }
        const fonts = '<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500|Material+Icons" rel="stylesheet">';
        const htmlText = buffer.toString().replace(/([\s]+)?\<\/head\>([\s]+)?\<body\>/, (match, token) => {
            return match.replace(token, `${token}\n  ${fonts}\n`);
        });
        host.overwrite(indexPath, htmlText);
        return host;
    };
}
exports.addFontsToIndex = addFontsToIndex;
//# sourceMappingURL=fonts.js.map