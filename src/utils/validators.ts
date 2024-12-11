import {NAMESPACES} from "../constants/namespaces";
import {parseCAIP2} from "./parser";

export function isValidCAIP2(chainId: string): boolean {
    try {
        const { namespace, reference } = parseCAIP2(chainId);
        return Object.values(NAMESPACES).includes(namespace as any);
    } catch {
        return false;
    }
}