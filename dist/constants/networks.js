"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EVM_CHAINS_DATA = exports.NETWORKS = void 0;
const namespaces_1 = require("./namespaces");
exports.NETWORKS = {
    // EVM networks (eip155)
    ETHEREUM: {
        MAINNET: `${namespaces_1.NAMESPACES.EVM}:1`,
        GOERLI: `${namespaces_1.NAMESPACES.EVM}:5`,
        SEPOLIA: `${namespaces_1.NAMESPACES.EVM}:11155111`,
    },
    BSC: {
        MAINNET: `${namespaces_1.NAMESPACES.EVM}:56`,
        TESTNET: `${namespaces_1.NAMESPACES.EVM}:97`,
    },
    POLYGON: {
        MAINNET: `${namespaces_1.NAMESPACES.EVM}:137`,
        MUMBAI: `${namespaces_1.NAMESPACES.EVM}:80001`,
    },
    ARBITRUM: {
        MAINNET: `${namespaces_1.NAMESPACES.EVM}:42161`,
        GOERLI: `${namespaces_1.NAMESPACES.EVM}:421613`,
    },
    OPTIMISM: {
        MAINNET: `${namespaces_1.NAMESPACES.EVM}:10`,
        GOERLI: `${namespaces_1.NAMESPACES.EVM}:420`,
    },
    AVALANCHE: {
        MAINNET: `${namespaces_1.NAMESPACES.EVM}:43114`,
        TESTNET: `${namespaces_1.NAMESPACES.EVM}:43113`,
    },
    // Bitcoin-based (bip122)
    BITCOIN: {
        MAINNET: `${namespaces_1.NAMESPACES.BITCOIN}:000000000019d6689c085ae165831e93`,
        TESTNET: `${namespaces_1.NAMESPACES.BITCOIN}:000000000933ea01ad0ee984209779ba`,
    },
    LITECOIN: {
        MAINNET: `${namespaces_1.NAMESPACES.BITCOIN}:12a765e31ffd4059bada1e25190f6e98`,
    },
    FEATHERCOIN: {
        MAINNET: `${namespaces_1.NAMESPACES.BITCOIN}:fdbe99b90c90bae7505796461471d89a`,
    },
    // Cosmos ecosystem
    COSMOS: {
        COSMOSHUB2: `${namespaces_1.NAMESPACES.COSMOS}:cosmoshub-2`,
        COSMOSHUB3: `${namespaces_1.NAMESPACES.COSMOS}:cosmoshub-3`,
        COSMOSHUB4: `${namespaces_1.NAMESPACES.COSMOS}:cosmoshub-4`,
    },
    BINANCE_CHAIN: {
        MAINNET: `${namespaces_1.NAMESPACES.COSMOS}:Binance-Chain-Tigris`,
    },
    IOV: {
        MAINNET: `${namespaces_1.NAMESPACES.COSMOS}:iov-mainnet`,
    },
    // Move-based chains
    MOVEMENT: {
        MAINNET: `${namespaces_1.NAMESPACES.MOVEMENT}:126`,
        TESTNET: `${namespaces_1.NAMESPACES.MOVEMENT}:125`,
    },
    APTOS: {
        MAINNET: `${namespaces_1.NAMESPACES.APTOS}:1`,
        TESTNET: `${namespaces_1.NAMESPACES.APTOS}:2`,
    },
    SUI: {
        MAINNET: `${namespaces_1.NAMESPACES.SUI}:101`,
        TESTNET: `${namespaces_1.NAMESPACES.SUI}:100`,
    },
    // Solana clusters
    SOLANA: {
        MAINNET: `${namespaces_1.NAMESPACES.SOLANA}:mainnet-beta`,
        DEVNET: `${namespaces_1.NAMESPACES.SOLANA}:devnet`,
        TESTNET: `${namespaces_1.NAMESPACES.SOLANA}:testnet`,
    },
    // StarkNet
    STARKNET: {
        MAINNET: `${namespaces_1.NAMESPACES.STARKNET}:SN_MAIN`,
        TESTNET: `${namespaces_1.NAMESPACES.STARKNET}:SN_GOERLI`,
    },
    // Lisk
    LISK: {
        MAINNET: `${namespaces_1.NAMESPACES.LISK}:9ee11e9df416b18b`,
    }
};
// Additional EVM Metadata (optional but useful)
exports.EVM_CHAINS_DATA = {
    '1': { name: 'Ethereum Mainnet', currency: 'ETH' },
    '56': { name: 'BNB Smart Chain', currency: 'BNB' },
    '137': { name: 'Polygon', currency: 'MATIC' },
    '42161': { name: 'Arbitrum One', currency: 'ETH' },
    '10': { name: 'Optimism', currency: 'ETH' },
    '43114': { name: 'Avalanche C-Chain', currency: 'AVAX' },
};
