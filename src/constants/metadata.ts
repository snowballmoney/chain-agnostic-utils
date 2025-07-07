import { NetworkMetadata } from "../types";
import { NETWORKS } from "./networks";

export const NETWORK_METADATA: Record<string, NetworkMetadata> = {
  // EVM Networks
  [NETWORKS.ETHEREUM.MAINNET]: {
    name: "Ethereum Mainnet",
    currency: "ETH",
    icon: "https://coin-images.coingecko.com/asset_platforms/images/279/small/ethereum.png",
    explorerUrl: "https://etherscan.io",
    rpcUrl: "https://ethereum.publicnode.com",
  },
  [NETWORKS.BSC.MAINNET]: {
    name: "BNB Smart Chain",
    currency: "BNB",
    icon: "https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png",
    explorerUrl: "https://bscscan.com",
    rpcUrl: "https://bsc-dataseed.binance.org",
  },
  [NETWORKS.POLYGON.MAINNET]: {
    name: "Polygon",
    currency: "MATIC",
    icon: "https://assets.coingecko.com/coins/images/4713/standard/polygon.png",
    explorerUrl: "https://polygonscan.com",
    rpcUrl: "https://polygon-rpc.com",
  },
  [NETWORKS.AVALANCHE.MAINNET]: {
    name: "Avalanche C-Chain",
    currency: "AVAX",
    icon: "https://www.avax.network/favicon.ico",
    explorerUrl: "https://snowtrace.io",
    rpcUrl: "https://api.avax.network/ext/bc/C/rpc",
  },
  [NETWORKS.ARBITRUM.MAINNET]: {
    name: "Arbitrum One",
    currency: "ETH",
    icon: "https://arbitrum.io/favicon.ico",
    explorerUrl: "https://arbiscan.io",
    rpcUrl: "https://arb1.arbitrum.io/rpc",
  },
  [NETWORKS.OPTIMISM.MAINNET]: {
    name: "Optimism",
    currency: "ETH",
    icon: "https://optimism.io/favicon.ico",
    explorerUrl: "https://optimistic.etherscan.io",
    rpcUrl: "https://mainnet.optimism.io",
  },
  [NETWORKS.FANTOM.MAINNET]: {
    name: "Fantom Opera",
    currency: "FTM",
    icon: "https://assets.coingecko.com/coins/images/4001/standard/Fantom_round.png",
    explorerUrl: "https://ftmscan.com",
    rpcUrl: "https://rpc.ftm.tools",
  },
  [NETWORKS.BASE.MAINNET]: {
    name: "Base",
    currency: "ETH",
    icon: "https://base.org/favicon.ico",
    explorerUrl: "https://basescan.org",
    rpcUrl: "https://mainnet.base.org",
  },
  [NETWORKS.GNOSIS.MAINNET]: {
    name: "Gnosis Chain",
    currency: "xDAI",
    icon: "https://coin-images.coingecko.com/asset_platforms/images/11062/small/Aatar_green_white.png",
    explorerUrl: "https://gnosisscan.io",
    rpcUrl: "https://rpc.gnosischain.com",
  },

  // Bitcoin and Related
  [NETWORKS.BITCOIN.MAINNET]: {
    name: "Bitcoin",
    currency: "BTC",
    icon: "https://bitcoin.org/img/icons/favicon.png",
    explorerUrl: "https://blockchain.info",
  },
  [NETWORKS.LITECOIN.MAINNET]: {
    name: "Litecoin",
    currency: "LTC",
    icon: "https://assets.coingecko.com/coins/images/2/standard/litecoin.png",
    explorerUrl: "https://litecoin.info",
  },
  [NETWORKS.DOGECOIN.MAINNET]: {
    name: "Dogecoin",
    currency: "DOGE",
    icon: "https://dogecoin.com/favicon.ico",
    explorerUrl: "https://dogechain.info",
  },

  // Layer 1 Ecosystems
  [NETWORKS.SOLANA.MAINNET]: {
    name: "Solana",
    currency: "SOL",
    icon: "https://solana.com/favicon.ico",
    explorerUrl: "https://explorer.solana.com",
    rpcUrl: "https://api.mainnet-beta.solana.com",
  },
  [NETWORKS.CARDANO.MAINNET]: {
    name: "Cardano",
    currency: "ADA",
    icon: "https://assets.coingecko.com/coins/images/975/standard/cardano.png",
    explorerUrl: "https://cardanoscan.io",
  },
  [NETWORKS.POLKADOT.MAINNET]: {
    name: "Polkadot",
    currency: "DOT",
    icon: "https://coin-images.coingecko.com/asset_platforms/images/12171/small/polkadot.jpeg",
    explorerUrl: "https://polkascan.io/polkadot",
  },
  [NETWORKS.COSMOS.MAINNET]: {
    name: "Cosmos Hub",
    currency: "ATOM",
    icon: "https://assets.coingecko.com/coins/images/1481/standard/cosmos_hub.png",
    explorerUrl: "https://www.mintscan.io/cosmos",
  },
  [NETWORKS.NEAR.MAINNET]: {
    name: "NEAR Protocol",
    currency: "NEAR",
    icon: "https://near.org/favicon.ico",
    explorerUrl: "https://explorer.near.org",
  },
  [NETWORKS.ALGORAND.MAINNET]: {
    name: "Algorand",
    currency: "ALGO",
    icon: "https://assets.coingecko.com/coins/images/4380/standard/download.png",
    explorerUrl: "https://algoexplorer.io",
  },
  [NETWORKS.TRON.MAINNET]: {
    name: "TRON",
    currency: "TRX",
    icon: "https://assets.coingecko.com/coins/images/1094/standard/tron-logo.png",
    explorerUrl: "https://tronscan.org",
  },
  [NETWORKS.STELLAR.MAINNET]: {
    name: "Stellar",
    currency: "XLM",
    icon: "https://stellar.org/favicon.ico",
    explorerUrl: "https://stellar.expert",
  },
  [NETWORKS.HEDERA.MAINNET]: {
    name: "Hedera",
    currency: "HBAR",
    icon: "https://assets.coingecko.com/coins/images/3688/standard/hbar.png?1696504364",
    explorerUrl: "https://hashscan.io",
  },

  // Move-based Networks
  [NETWORKS.APTOS.MAINNET]: {
    name: "Aptos",
    currency: "APT",
    icon: "https://aptoslabs.com/favicon.ico",
    explorerUrl: "https://explorer.aptoslabs.com",
  },
  [NETWORKS.SUI.MAINNET]: {
    name: "Sui",
    currency: "SUI",
    icon: "https://sui.io/favicon.ico",
    explorerUrl: "https://explorer.sui.io",
  },

  // Layer 2 Solutions
  [NETWORKS.STARKNET.MAINNET]: {
    name: "StarkNet",
    currency: "ETH",
    icon: "https://www.starknet.io/favicon.ico",
    explorerUrl: "https://voyager.online",
  },
  [NETWORKS.ZKSYNC.ERA]: {
    name: "zkSync Era",
    currency: "ETH",
    icon: "https://zksync.io/favicon.ico",
    explorerUrl: "https://explorer.zksync.io",
  },
  [NETWORKS.LINEA.MAINNET]: {
    name: "Linea",
    currency: "ETH",
    icon: "https://linea.build/favicon.ico",
    explorerUrl: "https://lineascan.build",
  },

  // Newer Ecosystems
  [NETWORKS.FLOW.MAINNET]: {
    name: "Flow",
    currency: "FLOW",
    icon: "https://assets.coingecko.com/coins/images/13446/standard/5f6294c0c7a8cda55cb1c936_Flow_Wordmark.png?1696513210",
    explorerUrl: "https://flowscan.org",
  },
  [NETWORKS.TEZOS.MAINNET]: {
    name: "Tezos",
    currency: "XTZ",
    icon: "https://tezos.com/favicon.ico",
    explorerUrl: "https://tzstats.com",
  },
  [NETWORKS.ELROND.MAINNET]: {
    name: "MultiversX (Elrond)",
    currency: "EGLD",
    icon: "https://assets.coingecko.com/coins/images/12335/standard/egld-token-logo.png?1696512162",
    explorerUrl: "https://explorer.multiversx.com",
  },
  [NETWORKS.HARMONY.MAINNET]: {
    name: "Harmony",
    currency: "ONE",
    icon: "https://assets.coingecko.com/coins/images/4344/standard/Y88JAze.png?1696504947",
    explorerUrl: "https://explorer.harmony.one",
  },
  [NETWORKS.KLAYTN.MAINNET]: {
    name: "Klaytn",
    currency: "KLAY",
    icon: "https://assets.coingecko.com/coins/images/9672/standard/klaytn.png?1696509742",
    explorerUrl: "https://scope.klaytn.com",
  },
  [NETWORKS.CRONOS.MAINNET]: {
    name: "Cronos",
    currency: "CRO",
    icon: "https://cronos.org/favicon.ico",
    explorerUrl: "https://cronoscan.com",
  },
  [NETWORKS.MOONRIVER.MAINNET]: {
    name: "Moonriver",
    currency: "MOVR",
    icon: "https://assets.coingecko.com/coins/images/17984/standard/Moonriver_MOVR_ICON.png?1716647589",
    explorerUrl: "https://moonriver.moonscan.io",
  },
  [NETWORKS.OSMOSIS.MAINNET]: {
    name: "Osmosis",
    currency: "OSMO",
    icon: "https://osmosis.zone/favicon.ico",
    explorerUrl: "https://www.mintscan.io/osmosis",
  },
  [NETWORKS.ZILLIQA.MAINNET]: {
    name: "Zilliqa",
    currency: "ZIL",
    icon: "https://www.zilliqa.com/favicon.ico",
    explorerUrl: "https://viewblock.io/zilliqa",
  },
  [NETWORKS.VECHAIN.MAINNET]: {
    name: "VeChain",
    currency: "VET",
    icon: "https://assets.coingecko.com/coins/images/1167/standard/VET.png?1742383283",
    explorerUrl: "https://explore.vechain.org",
  },
};
