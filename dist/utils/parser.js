"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCAIP2 = parseCAIP2;
exports.formatCAIP2 = formatCAIP2;
function parseCAIP2(chainId) {
    const [namespace, reference] = chainId.split(':');
    if (!namespace || !reference) {
        throw new Error('Invalid CAIP-2 identifier');
    }
    return { namespace, reference };
}
function formatCAIP2(namespace, reference) {
    return `${namespace}:${reference}`;
}
