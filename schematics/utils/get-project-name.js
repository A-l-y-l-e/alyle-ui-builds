"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const config_1 = require("@schematics/angular/utility/config");
function getDefaultProjectName(hostOrWorkspace) {
    let projectName;
    if (hostOrWorkspace.defaultProject) {
        projectName = hostOrWorkspace.defaultProject;
    }
    else {
        const workspace = config_1.getWorkspace(hostOrWorkspace);
        projectName = workspace.defaultProject;
    }
    if (!projectName) {
        throw new schematics_1.SchematicsException(`Could not find project in workspace: ${projectName}`);
    }
    return projectName;
}
exports.getDefaultProjectName = getDefaultProjectName;
//# sourceMappingURL=get-project-name.js.map