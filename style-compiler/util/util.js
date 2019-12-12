"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts = require("typescript");
function findNode(node, kind) {
    if (node.kind === kind) {
        return node;
    }
    let foundNode = null;
    ts.forEachChild(node, childNode => {
        foundNode = foundNode || findNode(childNode, kind);
    });
    return foundNode;
}
exports.findNode = findNode;
function getNodes(node) {
    const nodes = [];
    ts.forEachChild(node, childNode => nodes.push(childNode));
    return nodes;
}
exports.getNodes = getNodes;
//# sourceMappingURL=util.js.map