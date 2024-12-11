import {CAIP2} from "../types";

export function parseCAIP2(chainId: string): CAIP2 {
    const [namespace, reference] = chainId.split(':');

    if (!namespace || !reference) {
        throw new Error('Invalid CAIP-2 identifier');
    }

    return { namespace, reference };
}

export function formatCAIP2(namespace: string, reference: string): string {
    return `${namespace}:${reference}`;
}