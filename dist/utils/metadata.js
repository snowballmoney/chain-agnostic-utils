"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNetworkMetadata = getNetworkMetadata;
const metadata_1 = require("../constants/metadata");
function getNetworkMetadata(caip2Id) {
    const metadata = metadata_1.NETWORK_METADATA[caip2Id];
    if (!metadata) {
        throw new Error(`No metadata found for network: ${caip2Id}`);
    }
    return metadata;
}
