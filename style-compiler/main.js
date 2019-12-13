#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fs_1 = require("fs");
const path = require("path");
require("./check");
const yargs = require(process.cwd() + "/node_modules/yargs");
const chalk_1 = require("chalk");
const compiler_1 = require("./compiler");
const pkg = JSON.parse(fs_1.readFileSync('package.json', 'utf8'));
const note = `Note: It is recommended to use git and have saved the changes.\n`
    + `Compile the files for production only, this will modify your\nlyl styles to another format.\n`;
const argv = yargs
    .alias('h', 'help')
    .alias('v', 'version')
    .version()
    .help(false).argv;
if (argv.help) {
    console.log(`Version ${pkg.version}\n`);
    console.log(chalk_1.default.bold.yellowBright(note));
    console.log(`Usage: lyl dist/my-app`);
    process.exit(0);
}
function walk(dir, fileList = []) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const files = yield fs_1.promises.readdir(dir);
        for (const file of files) {
            const stat = yield fs_1.promises.stat(path.join(dir, file));
            if (stat.isDirectory()) {
                fileList = yield walk(path.join(dir, file), fileList);
            }
            else {
                fileList.push(path.join(dir, file));
            }
        }
        return fileList;
    });
}
const directory = argv._[0];
if (directory) {
    console.log(chalk_1.default.bold.blueBright(`Directory: ${directory}`));
}
else {
    console.log(chalk_1.default.bold.redBright(`Require directory`));
    console.log(`Examples: lyl dist/lib`);
    process.exit(1);
}
walk(directory).then((res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    res = res
        .filter(file => file.endsWith('.ts'));
    res.forEach((file) => tslib_1.__awaiter(this, void 0, void 0, function* () {
        const content = (yield fs_1.promises.readFile(file)).toString('utf8');
        const hasLyl = compiler_1.hasLylStyle(content);
        if (hasLyl) {
            const compiled = compiler_1.styleCompiler(content);
            yield fs_1.promises.writeFile(file, compiled, 'utf8');
            console.log(`${chalk_1.default.bold.greenBright('Updated: ')}${file}`);
        }
    }));
}));
//# sourceMappingURL=main.js.map