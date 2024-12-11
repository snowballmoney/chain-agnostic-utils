import {NAMESPACES} from "./namespaces";

export const NETWORKS = {
    // EVM networks (eip155)
    ETHEREUM: {
        MAINNET: `${NAMESPACES.EVM}:1`,
        GOERLI: `${NAMESPACES.EVM}:5`,
        SEPOLIA: `${NAMESPACES.EVM}:11155111`,
    },
    BSC: {
        MAINNET: `${NAMESPACES.EVM}:56`,
        TESTNET: `${NAMESPACES.EVM}:97`,
    },
    POLYGON: {
        MAINNET: `${NAMESPACES.EVM}:137`,
        MUMBAI: `${NAMESPACES.EVM}:80001`,
    },
    ARBITRUM: {
        MAINNET: `${NAMESPACES.EVM}:42161`,
        GOERLI: `${NAMESPACES.EVM}:421613`,
    },
    OPTIMISM: {
        MAINNET: `${NAMESPACES.EVM}:10`,
        GOERLI: `${NAMESPACES.EVM}:420`,
    },
    AVALANCHE: {
        MAINNET: `${NAMESPACES.EVM}:43114`,
        TESTNET: `${NAMESPACES.EVM}:43113`,
    },

    // Bitcoin-based (bip122)
    BITCOIN: {
        MAINNET: `${NAMESPACES.BITCOIN}:000000000019d6689c085ae165831e93`,
        TESTNET: `${NAMESPACES.BITCOIN}:000000000933ea01ad0ee984209779ba`,
    },
    LITECOIN: {
        MAINNET: `${NAMESPACES.BITCOIN}:12a765e31ffd4059bada1e25190f6e98`,
    },
    FEATHERCOIN: {
        MAINNET: `${NAMESPACES.BITCOIN}:fdbe99b90c90bae7505796461471d89a`,
    },

    // Cosmos ecosystem
    COSMOS: {
        COSMOSHUB2: `${NAMESPACES.COSMOS}:cosmoshub-2`,
        COSMOSHUB3: `${NAMESPACES.COSMOS}:cosmoshub-3`,
        COSMOSHUB4: `${NAMESPACES.COSMOS}:cosmoshub-4`,
    },
    BINANCE_CHAIN: {
        MAINNET: `${NAMESPACES.COSMOS}:Binance-Chain-Tigris`,
    },
    IOV: {
        MAINNET: `${NAMESPACES.COSMOS}:iov-mainnet`,
    },

    // Move-based chains
    MOVEMENT: {
        MAINNET: `${NAMESPACES.MOVEMENT}:126`,
        TESTNET: `${NAMESPACES.MOVEMENT}:125`,
    },
    APTOS: {
        MAINNET: `${NAMESPACES.APTOS}:1`,
        TESTNET: `${NAMESPACES.APTOS}:2`,
    },
    SUI: {
        MAINNET: `${NAMESPACES.SUI}:101`,
        TESTNET: `${NAMESPACES.SUI}:100`,
    },

    // Solana clusters
    SOLANA: {
        MAINNET: `${NAMESPACES.SOLANA}:mainnet-beta`,
        DEVNET: `${NAMESPACES.SOLANA}:devnet`,
        TESTNET: `${NAMESPACES.SOLANA}:testnet`,
    },

    // StarkNet
    STARKNET: {
        MAINNET: `${NAMESPACES.STARKNET}:SN_MAIN`,
        TESTNET: `${NAMESPACES.STARKNET}:SN_GOERLI`,
    },

    // Lisk
    LISK: {
        MAINNET: `${NAMESPACES.LISK}:9ee11e9df416b18b`,
    }
} as const;

// Additional EVM Metadata (optional but useful)
export const EVM_CHAINS_DATA = {
    '1': { name: 'Ethereum Mainnet', currency: 'ETH' },
    '56': { name: 'BNB Smart Chain', currency: 'BNB' },
    '137': { name: 'Polygon', currency: 'MATIC' },
    '42161': { name: 'Arbitrum One', currency: 'ETH' },
    '10': { name: 'Optimism', currency: 'ETH' },
    '43114': { name: 'Avalanche C-Chain', currency: 'AVAX' },
} as const;