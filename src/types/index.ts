export interface CAIP2 {
    namespace: string;
    reference: string;
}

export interface NetworkMetadata {
    name: string;
    currency: string;
    icon: string;
    explorerUrl?: string;
    rpcUrl?: string;
}
