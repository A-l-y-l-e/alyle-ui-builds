"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@schematics/angular/utility/config");
const get_project_1 = require("../utils/get-project");
const get_project_target_1 = require("../utils/get-project-target");
const hammerjsImportStatement = `import 'hammerjs';`;
/** Adds HammerJS to the main file of the specified Angular CLI project. */
function addHammerJsToMain(options) {
    return (host, context) => {
        context.logger.debug('addHammerJsToMain');
        if (!options.gestures) {
            return;
        }
        const workspace = config_1.getWorkspace(host);
        const project = get_project_1.getProjectFromWorkspace(workspace, options.project);
        const mainFile = get_project_target_1.getProjectTargetOptions(project, 'build').main;
        const recorder = host.beginUpdate(mainFile);
        const buffer = host.read(mainFile);
        if (!buffer) {
            return console.error(`Could not read the project main file (${mainFile}). Please manually ` +
                `import HammerJS in your main TypeScript file.`);
        }
        const fileContent = buffer.toString('utf8');
        if (fileContent.includes(hammerjsImportStatement)) {
            return console.log(`HammerJS is already imported in the project main file (${mainFile}).`);
        }
        recorder.insertRight(0, `${hammerjsImportStatement}\n`);
        host.commitUpdate(recorder);
    };
}
exports.addHammerJsToMain = addHammerJsToMain;
//# sourceMappingURL=gestures.js.map