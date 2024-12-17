import { NAMESPACES } from "./constants/namespaces";
import { NETWORK_METADATA } from "./constants/metadata";
import { NETWORKS } from "./constants/networks";
import { CAIP2, NetworkMetadata } from "./types";

export interface CAIP2ManagerOptions {
    networks?: Record<string, NetworkMetadata>;
    defaultNetworks?: boolean; // if false, only custom networks will be used
}

export class CAIP2Manager {
    private static instance: CAIP2Manager | null = null;
    private networks: Map<string, NetworkMetadata>;
    private initialized: boolean = false;

    private constructor() {
        this.networks = new Map();
    }

    public static getInstance(): CAIP2Manager {
        if (!CAIP2Manager.instance) {
            CAIP2Manager.instance = new CAIP2Manager();
        }
        return CAIP2Manager.instance;
    }

    /**
     * Initialize the manager with options
     * This should be called before using the manager
     */
    public init(options: CAIP2ManagerOptions = {}): void {
        if (this.initialized) {
            throw new Error('CAIP2Manager is already initialized');
        }

        // Load default networks if not explicitly disabled
        if (options.defaultNetworks !== false) {
            Object.entries(NETWORK_METADATA).forEach(([key, value]) => {
                this.networks.set(key, value);
            });
        }

        // Add custom networks
        if (options.networks) {
            Object.entries(options.networks).forEach(([key, value]) => {
                if (this.isValid(key)) {
                    this.networks.set(key, value);
                } else {
                    console.warn(`Invalid CAIP-2 identifier skipped: ${key}`);
                }
            });
        }

        this.initialized = true;
    }

    /**
     * Get built-in networks object
     */
    public static get NETWORKS() {
        return NETWORKS;
    }

    /**
     * Get built-in namespaces
     */
    public static get NAMESPACES() {
        return NAMESPACES;
    }

    /**
     * Parse CAIP2 identifier into namespace and reference
     */
    public parse(chainId: string): CAIP2 {
        const [namespace, reference] = chainId.split(':');
        if (!namespace || !reference) {
            throw new Error('Invalid CAIP-2 identifier');
        }
        return { namespace, reference };
    }

    /**
     * Format namespace and reference into CAIP2 identifier
     */
    public format(namespace: string, reference: string): string {
        return `${namespace}:${reference}`;
    }

    /**
     * Validate CAIP2 identifier
     */
    public isValid(chainId: string): boolean {
        try {
            const { namespace } = this.parse(chainId);
            return Object.values(NAMESPACES).includes(namespace as any);
        } catch {
            return false;
        }
    }

    /**
     * Get network metadata
     */
    public getNetwork(caip2Id: string): NetworkMetadata {
        this.checkInitialized();
        const metadata = this.networks.get(caip2Id);
        if (!metadata) {
            throw new Error(`No metadata found for network: ${caip2Id}`);
        }
        return metadata;
    }

    /**
     * Add or update network
     */
    public addNetwork(caip2Id: string, metadata: NetworkMetadata): void {
        this.checkInitialized();
        if (!this.isValid(caip2Id)) {
            throw new Error(`Invalid CAIP-2 identifier: ${caip2Id}`);
        }
        this.networks.set(caip2Id, metadata);
    }

    /**
     * Remove custom network
     */
    public removeNetwork(caip2Id: string): boolean {
        this.checkInitialized();
        return this.networks.delete(caip2Id);
    }

    /**
     * Get all registered networks
     */
    public getAllNetworks(): Map<string, NetworkMetadata> {
        this.checkInitialized();
        return new Map(this.networks);
    }

    /**
     * Check if network exists
     */
    public hasNetwork(caip2Id: string): boolean {
        this.checkInitialized();
        return this.networks.has(caip2Id);
    }

    /**
     * Reset to initial state
     */
    public reset(): void {
        this.networks.clear();
        this.initialized = false;
    }

    private checkInitialized(): void {
        if (!this.initialized) {
            throw new Error('CAIP2Manager is not initialized. Call init() first.');
        }
    }
}