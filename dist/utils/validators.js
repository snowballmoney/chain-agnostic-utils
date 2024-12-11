"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidCAIP2 = isValidCAIP2;
const namespaces_1 = require("../constants/namespaces");
const parser_1 = require("./parser");
function isValidCAIP2(chainId) {
    try {
        const { namespace, reference } = (0, parser_1.parseCAIP2)(chainId);
        return Object.values(namespaces_1.NAMESPACES).includes(namespace);
    }
    catch (_a) {
        return false;
    }
}
