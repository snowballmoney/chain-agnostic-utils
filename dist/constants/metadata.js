"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NETWORK_METADATA = void 0;
const networks_1 = require("./networks");
exports.NETWORK_METADATA = {
    // EVM Networks
    [networks_1.NETWORKS.ETHEREUM.MAINNET]: {
        name: 'Ethereum Mainnet',
        currency: 'ETH',
        icon: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png',
        explorerUrl: 'https://etherscan.io'
    },
    [networks_1.NETWORKS.BSC.MAINNET]: {
        name: 'BNB Smart Chain',
        currency: 'BNB',
        icon: 'https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png',
        explorerUrl: 'https://bscscan.com'
    },
    [networks_1.NETWORKS.POLYGON.MAINNET]: {
        name: 'Polygon',
        currency: 'MATIC',
        icon: 'https://assets.coingecko.com/coins/images/4713/small/matic-token-icon.png',
        explorerUrl: 'https://polygonscan.com'
    },
    [networks_1.NETWORKS.ARBITRUM.MAINNET]: {
        name: 'Arbitrum One',
        currency: 'ETH',
        icon: 'https://assets.coingecko.com/coins/images/16547/small/photo_2023-03-29_21.47.00.jpeg',
        explorerUrl: 'https://arbiscan.io'
    },
    [networks_1.NETWORKS.OPTIMISM.MAINNET]: {
        name: 'Optimism',
        currency: 'ETH',
        icon: 'https://assets.coingecko.com/coins/images/25244/small/Optimism.png',
        explorerUrl: 'https://optimistic.etherscan.io'
    },
    [networks_1.NETWORKS.AVALANCHE.MAINNET]: {
        name: 'Avalanche',
        currency: 'AVAX',
        icon: 'https://assets.coingecko.com/coins/images/12559/small/Avalanche_Circle_RedWhite_Trans.png',
        explorerUrl: 'https://snowtrace.io'
    },
    // Move-based Networks
    [networks_1.NETWORKS.MOVEMENT.MAINNET]: {
        name: 'Movement Mainnet',
        currency: 'MVMT',
        icon: 'https://movementlabs.xyz/wp-content/uploads/2023/09/cropped-favicon-270x270.png',
        explorerUrl: 'https://explorer.movement.xyz'
    },
    [networks_1.NETWORKS.APTOS.MAINNET]: {
        name: 'Aptos Mainnet',
        currency: 'APT',
        icon: 'https://aptosfoundation.org/brandbook/logomark/PNG/Aptos_mark_BLK.png',
        explorerUrl: 'https://explorer.aptoslabs.com'
    },
    [networks_1.NETWORKS.SUI.MAINNET]: {
        name: 'Sui Mainnet',
        currency: 'SUI',
        icon: 'https://cdn.prod.website-files.com/6425f546844727ce5fb9e5ab/659d970f53d2997773cf1db1_emblem-sui-d.svg',
        explorerUrl: 'https://explorer.sui.io'
    },
    // Solana Networks
    [networks_1.NETWORKS.SOLANA.MAINNET]: {
        name: 'Solana Mainnet',
        currency: 'SOL',
        icon: 'https://solana.com/favicon.ico',
        explorerUrl: 'https://explorer.solana.com'
    },
    // Cosmos Networks
    [networks_1.NETWORKS.COSMOS.COSMOSHUB4]: {
        name: 'Cosmos Hub',
        currency: 'ATOM',
        icon: 'https://cosmos.network/favicon.ico',
        explorerUrl: 'https://www.mintscan.io/cosmos'
    }
};
