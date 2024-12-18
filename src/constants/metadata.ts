import { NetworkMetadata } from "../types";
import { NETWORKS } from "./networks";

export const NETWORK_METADATA: Record<string, NetworkMetadata> = {
    // EVM Networks
    [NETWORKS.ETHEREUM.MAINNET]: {
        name: 'Ethereum Mainnet',
        currency: 'ETH',
        icon: 'https://ethereum.org/static/6b935ac0e6194247347855dc3d328e83/13c43/eth-diamond-black.png',
        explorerUrl: 'https://etherscan.io',
        rpcUrl: 'https://ethereum.publicnode.com'
    },
    [NETWORKS.BSC.MAINNET]: {
        name: 'BNB Smart Chain',
        currency: 'BNB',
        icon: 'https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png',
        explorerUrl: 'https://bscscan.com',
        rpcUrl: 'https://bsc-dataseed.binance.org'
    },
    [NETWORKS.POLYGON.MAINNET]: {
        name: 'Polygon',
        currency: 'MATIC',
        icon: 'https://polygon.technology/favicon.png',
        explorerUrl: 'https://polygonscan.com',
        rpcUrl: 'https://polygon-rpc.com'
    },
    [NETWORKS.AVALANCHE.MAINNET]: {
        name: 'Avalanche C-Chain',
        currency: 'AVAX',
        icon: 'https://www.avax.network/favicon.ico',
        explorerUrl: 'https://snowtrace.io',
        rpcUrl: 'https://api.avax.network/ext/bc/C/rpc'
    },
    [NETWORKS.ARBITRUM.MAINNET]: {
        name: 'Arbitrum One',
        currency: 'ETH',
        icon: 'https://arbitrum.io/favicon.ico',
        explorerUrl: 'https://arbiscan.io',
        rpcUrl: 'https://arb1.arbitrum.io/rpc'
    },
    [NETWORKS.OPTIMISM.MAINNET]: {
        name: 'Optimism',
        currency: 'ETH',
        icon: 'https://optimism.io/favicon.ico',
        explorerUrl: 'https://optimistic.etherscan.io',
        rpcUrl: 'https://mainnet.optimism.io'
    },
    [NETWORKS.FANTOM.MAINNET]: {
        name: 'Fantom Opera',
        currency: 'FTM',
        icon: 'https://fantom.foundation/favicon.ico',
        explorerUrl: 'https://ftmscan.com',
        rpcUrl: 'https://rpc.ftm.tools'
    },
    [NETWORKS.BASE.MAINNET]: {
        name: 'Base',
        currency: 'ETH',
        icon: 'https://base.org/favicon.ico',
        explorerUrl: 'https://basescan.org',
        rpcUrl: 'https://mainnet.base.org'
    },
    [NETWORKS.GNOSIS.MAINNET]: {
        name: 'Gnosis Chain',
        currency: 'xDAI',
        icon: 'https://www.gnosis.io/favicon.ico',
        explorerUrl: 'https://gnosisscan.io',
        rpcUrl: 'https://rpc.gnosischain.com'
    },

    // Bitcoin and Related
    [NETWORKS.BITCOIN.MAINNET]: {
        name: 'Bitcoin',
        currency: 'BTC',
        icon: 'https://bitcoin.org/img/icons/favicon.png',
        explorerUrl: 'https://blockchain.info'
    },
    [NETWORKS.LITECOIN.MAINNET]: {
        name: 'Litecoin',
        currency: 'LTC',
        icon: 'https://litecoin.org/favicon.ico',
        explorerUrl: 'https://litecoin.info'
    },
    [NETWORKS.DOGECOIN.MAINNET]: {
        name: 'Dogecoin',
        currency: 'DOGE',
        icon: 'https://dogecoin.com/favicon.ico',
        explorerUrl: 'https://dogechain.info'
    },

    // Layer 1 Ecosystems
    [NETWORKS.SOLANA.MAINNET]: {
        name: 'Solana',
        currency: 'SOL',
        icon: 'https://solana.com/favicon.ico',
        explorerUrl: 'https://explorer.solana.com',
        rpcUrl: 'https://api.mainnet-beta.solana.com'
    },
    [NETWORKS.CARDANO.MAINNET]: {
        name: 'Cardano',
        currency: 'ADA',
        icon: 'https://cardano.org/favicon.ico',
        explorerUrl: 'https://cardanoscan.io'
    },
    [NETWORKS.POLKADOT.MAINNET]: {
        name: 'Polkadot',
        currency: 'DOT',
        icon: 'https://polkadot.network/favicon.ico',
        explorerUrl: 'https://polkascan.io/polkadot'
    },
    [NETWORKS.COSMOS.MAINNET]: {
        name: 'Cosmos Hub',
        currency: 'ATOM',
        icon: 'https://cosmos.network/favicon.ico',
        explorerUrl: 'https://www.mintscan.io/cosmos'
    },
    [NETWORKS.NEAR.MAINNET]: {
        name: 'NEAR Protocol',
        currency: 'NEAR',
        icon: 'https://near.org/favicon.ico',
        explorerUrl: 'https://explorer.near.org'
    },
    [NETWORKS.ALGORAND.MAINNET]: {
        name: 'Algorand',
        currency: 'ALGO',
        icon: 'https://www.algorand.com/favicon.ico',
        explorerUrl: 'https://algoexplorer.io'
    },
    [NETWORKS.TRON.MAINNET]: {
        name: 'TRON',
        currency: 'TRX',
        icon: 'https://tron.network/favicon.ico',
        explorerUrl: 'https://tronscan.org'
    },
    [NETWORKS.STELLAR.MAINNET]: {
        name: 'Stellar',
        currency: 'XLM',
        icon: 'https://stellar.org/favicon.ico',
        explorerUrl: 'https://stellar.expert'
    },
    [NETWORKS.HEDERA.MAINNET]: {
        name: 'Hedera',
        currency: 'HBAR',
        icon: 'https://hedera.com/favicon.ico',
        explorerUrl: 'https://hashscan.io'
    },

    // Move-based Networks
    [NETWORKS.APTOS.MAINNET]: {
        name: 'Aptos',
        currency: 'APT',
        icon: 'https://aptoslabs.com/favicon.ico',
        explorerUrl: 'https://explorer.aptoslabs.com'
    },
    [NETWORKS.SUI.MAINNET]: {
        name: 'Sui',
        currency: 'SUI',
        icon: 'https://sui.io/favicon.ico',
        explorerUrl: 'https://explorer.sui.io'
    },

    // Layer 2 Solutions
    [NETWORKS.STARKNET.MAINNET]: {
        name: 'StarkNet',
        currency: 'ETH',
        icon: 'https://www.starknet.io/favicon.ico',
        explorerUrl: 'https://voyager.online'
    },
    [NETWORKS.ZKSYNC.ERA]: {
        name: 'zkSync Era',
        currency: 'ETH',
        icon: 'https://zksync.io/favicon.ico',
        explorerUrl: 'https://explorer.zksync.io'
    },
    [NETWORKS.LINEA.MAINNET]: {
        name: 'Linea',
        currency: 'ETH',
        icon: 'https://linea.build/favicon.ico',
        explorerUrl: 'https://lineascan.build'
    },

    // Newer Ecosystems
    [NETWORKS.FLOW.MAINNET]: {
        name: 'Flow',
        currency: 'FLOW',
        icon: 'https://flow.com/favicon.ico',
        explorerUrl: 'https://flowscan.org'
    },
    [NETWORKS.TEZOS.MAINNET]: {
        name: 'Tezos',
        currency: 'XTZ',
        icon: 'https://tezos.com/favicon.ico',
        explorerUrl: 'https://tzstats.com'
    },
    [NETWORKS.ELROND.MAINNET]: {
        name: 'MultiversX (Elrond)',
        currency: 'EGLD',
        icon: 'https://multiversx.com/favicon.ico',
        explorerUrl: 'https://explorer.multiversx.com'
    },
    [NETWORKS.HARMONY.MAINNET]: {
        name: 'Harmony',
        currency: 'ONE',
        icon: 'https://www.harmony.one/favicon.ico',
        explorerUrl: 'https://explorer.harmony.one'
    },
    [NETWORKS.KLAYTN.MAINNET]: {
        name: 'Klaytn',
        currency: 'KLAY',
        icon: 'https://klaytn.foundation/favicon.ico',
        explorerUrl: 'https://scope.klaytn.com'
    },
    [NETWORKS.CRONOS.MAINNET]: {
        name: 'Cronos',
        currency: 'CRO',
        icon: 'https://cronos.org/favicon.ico',
        explorerUrl: 'https://cronoscan.com'
    },
    [NETWORKS.MOONRIVER.MAINNET]: {
        name: 'Moonriver',
        currency: 'MOVR',
        icon: 'https://moonriver.network/favicon.ico',
        explorerUrl: 'https://moonriver.moonscan.io'
    },
    [NETWORKS.OSMOSIS.MAINNET]: {
        name: 'Osmosis',
        currency: 'OSMO',
        icon: 'https://osmosis.zone/favicon.ico',
        explorerUrl: 'https://www.mintscan.io/osmosis'
    },
    [NETWORKS.ZILLIQA.MAINNET]: {
        name: 'Zilliqa',
        currency: 'ZIL',
        icon: 'https://www.zilliqa.com/favicon.ico',
        explorerUrl: 'https://viewblock.io/zilliqa'
    },
    [NETWORKS.VECHAIN.MAINNET]: {
        name: 'VeChain',
        currency: 'VET',
        icon: 'https://www.vechain.org/favicon.ico',
        explorerUrl: 'https://explore.vechain.org'
    }
};