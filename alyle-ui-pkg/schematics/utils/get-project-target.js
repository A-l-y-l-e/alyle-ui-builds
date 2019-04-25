"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
/** Resolves the architect options for the build target of the given project. */
function getProjectTargetOptions(project, buildTarget) {
    const targets = project.targets || project.architect;
    if (targets &&
        targets[buildTarget] &&
        targets[buildTarget].options) {
        return targets[buildTarget].options;
    }
    throw new schematics_1.SchematicsException(`Cannot determine project target configuration for: ${buildTarget}.`);
}
exports.getProjectTargetOptions = getProjectTargetOptions;
//# sourceMappingURL=get-project-target.js.map