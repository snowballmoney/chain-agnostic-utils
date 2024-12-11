import { NetworkMetadata } from "../types";
import { NETWORKS } from "./networks";

export const NETWORK_METADATA: Record<string, NetworkMetadata> = {
    // EVM Networks
    [NETWORKS.ETHEREUM.MAINNET]: {
        name: 'Ethereum Mainnet',
        currency: 'ETH',
        icon: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png',
        explorerUrl: 'https://etherscan.io'
    },
    [NETWORKS.BSC.MAINNET]: {
        name: 'BNB Smart Chain',
        currency: 'BNB',
        icon: 'https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png',
        explorerUrl: 'https://bscscan.com'
    },
    [NETWORKS.POLYGON.MAINNET]: {
        name: 'Polygon',
        currency: 'MATIC',
        icon: 'https://assets.coingecko.com/coins/images/4713/small/matic-token-icon.png',
        explorerUrl: 'https://polygonscan.com'
    },
    [NETWORKS.ARBITRUM.MAINNET]: {
        name: 'Arbitrum One',
        currency: 'ETH',
        icon: 'https://assets.coingecko.com/coins/images/16547/small/photo_2023-03-29_21.47.00.jpeg',
        explorerUrl: 'https://arbiscan.io'
    },
    [NETWORKS.OPTIMISM.MAINNET]: {
        name: 'Optimism',
        currency: 'ETH',
        icon: 'https://assets.coingecko.com/coins/images/25244/small/Optimism.png',
        explorerUrl: 'https://optimistic.etherscan.io'
    },
    [NETWORKS.AVALANCHE.MAINNET]: {
        name: 'Avalanche',
        currency: 'AVAX',
        icon: 'https://assets.coingecko.com/coins/images/12559/small/Avalanche_Circle_RedWhite_Trans.png',
        explorerUrl: 'https://snowtrace.io'
    },

    // Move-based Networks
    [NETWORKS.MOVEMENT.MAINNET]: {
        name: 'Movement Mainnet',
        currency: 'MVMT',
        icon: 'https://movementlabs.xyz/wp-content/uploads/2023/09/cropped-favicon-270x270.png',
        explorerUrl: 'https://explorer.movement.xyz'
    },
    [NETWORKS.APTOS.MAINNET]: {
        name: 'Aptos Mainnet',
        currency: 'APT',
        icon: 'https://aptosfoundation.org/brandbook/logomark/PNG/Aptos_mark_BLK.png',
        explorerUrl: 'https://explorer.aptoslabs.com'
    },
    [NETWORKS.SUI.MAINNET]: {
        name: 'Sui Mainnet',
        currency: 'SUI',
        icon: 'https://cdn.prod.website-files.com/6425f546844727ce5fb9e5ab/659d970f53d2997773cf1db1_emblem-sui-d.svg',
        explorerUrl: 'https://explorer.sui.io'
    },

    // Solana Networks
    [NETWORKS.SOLANA.MAINNET]: {
        name: 'Solana Mainnet',
        currency: 'SOL',
        icon: 'https://solana.com/favicon.ico',
        explorerUrl: 'https://explorer.solana.com'
    },

    // Cosmos Networks
    [NETWORKS.COSMOS.COSMOSHUB4]: {
        name: 'Cosmos Hub',
        currency: 'ATOM',
        icon: 'https://cosmos.network/favicon.ico',
        explorerUrl: 'https://www.mintscan.io/cosmos'
    }
};