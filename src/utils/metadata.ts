import {NetworkMetadata} from "../types";
import {NETWORK_METADATA} from "../constants/metadata";

export function getNetworkMetadata(caip2Id: string): NetworkMetadata {
    const metadata = NETWORK_METADATA[caip2Id];
    if (!metadata) {
        throw new Error(`No metadata found for network: ${caip2Id}`);
    }
    return metadata;
}