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
        AMOY: `${NAMESPACES.EVM}:80002`,
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
    GNOSIS: {
        MAINNET: `${NAMESPACES.EVM}:100`,
    },
    FANTOM: {
        MAINNET: `${NAMESPACES.EVM}:250`,
        TESTNET: `${NAMESPACES.EVM}:4002`,
    },
    CELO: {
        MAINNET: `${NAMESPACES.EVM}:42220`,
    },
    MOONRIVER: {
        MAINNET: `${NAMESPACES.EVM}:1285`,
    },
    CRONOS: {
        MAINNET: `${NAMESPACES.EVM}:25`,
    },
    KLAYTN: {
        MAINNET: `${NAMESPACES.EVM}:8217`,
    },
    BASE: {
        MAINNET: `${NAMESPACES.EVM}:8453`,
        GOERLI: `${NAMESPACES.EVM}:84531`,
    },
    LINEA: {
        MAINNET: `${NAMESPACES.EVM}:59144`,
    },
    METIS: {
        MAINNET: `${NAMESPACES.EVM}:1088`,
    },
    AURORA: {
        MAINNET: `${NAMESPACES.EVM}:1313161554`,
    },

    // Bitcoin-based (bip122)
    BITCOIN: {
        MAINNET: `${NAMESPACES.BITCOIN}:000000000019d6689c085ae165831e93`,
        TESTNET: `${NAMESPACES.BITCOIN}:000000000933ea01ad0ee984209779ba`,
    },
    LITECOIN: {
        MAINNET: `${NAMESPACES.BITCOIN}:12a765e31ffd4059bada1e25190f6e98`,
    },
    DOGECOIN: {
        MAINNET: `${NAMESPACES.BITCOIN}:1a91e3dace36e2be3bf030a65679fe82`,
    },
    FEATHERCOIN: {
        MAINNET: `${NAMESPACES.BITCOIN}:fdbe99b90c90bae7505796461471d89a`,
    },

    // Cosmos ecosystem
    COSMOS: {
        MAINNET: `${NAMESPACES.COSMOS}:cosmoshub-4`,
        TESTNET: `${NAMESPACES.COSMOS}:theta-testnet-001`,
        COSMOSHUB2: `${NAMESPACES.COSMOS}:cosmoshub-2`,
        COSMOSHUB3: `${NAMESPACES.COSMOS}:cosmoshub-3`,
    },
    OSMOSIS: {
        MAINNET: `${NAMESPACES.COSMOS}:osmosis-1`,
    },
    EVMOS: {
        MAINNET: `${NAMESPACES.COSMOS}:evmos_9001-2`,
    },
    STARGAZE: {
        MAINNET: `${NAMESPACES.COSMOS}:stargaze-1`,
    },

    // Polkadot ecosystem
    POLKADOT: {
        MAINNET: `${NAMESPACES.POLKADOT}:91b171bb158e2d3848fa23a9f1c25182`,
    },
    KUSAMA: {
        MAINNET: `${NAMESPACES.KUSAMA}:b0a8d493285c2df73290dfb7e61f870f`,
    },
    ASTAR: {
        MAINNET: `${NAMESPACES.POLKADOT}:astar`,
    },

    // Move-based chains
    MOVEMENT: {
        MAINNET: `${NAMESPACES.MOVEMENT}:126`,
        PORTO: `${NAMESPACES.MOVEMENT}:177`,
        BARDOCK: `${NAMESPACES.MOVEMENT}:250`,
    },
    APTOS: {
        MAINNET: `${NAMESPACES.APTOS}:1`,
        TESTNET: `${NAMESPACES.APTOS}:2`,
    },
    SUI: {
        MAINNET: `${NAMESPACES.SUI}:1`,
        TESTNET: `${NAMESPACES.SUI}:2`,
    },

    // Other major chains
    SOLANA: {
        MAINNET: `${NAMESPACES.SOLANA}:mainnet-beta`,
        DEVNET: `${NAMESPACES.SOLANA}:devnet`,
        TESTNET: `${NAMESPACES.SOLANA}:testnet`,
    },
    CARDANO: {
        MAINNET: `${NAMESPACES.CARDANO}:mainnet`,
        TESTNET: `${NAMESPACES.CARDANO}:testnet`,
    },
    NEAR: {
        MAINNET: `${NAMESPACES.NEAR}:mainnet`,
        TESTNET: `${NAMESPACES.NEAR}:testnet`,
    },
    ALGORAND: {
        MAINNET: `${NAMESPACES.ALGORAND}:mainnet-v1.0`,
        TESTNET: `${NAMESPACES.ALGORAND}:testnet-v1.0`,
    },
    RIPPLE: {
        MAINNET: `${NAMESPACES.RIPPLE}:mainnet`,
    },
    STELLAR: {
        MAINNET: `${NAMESPACES.STELLAR}:public`,
        TESTNET: `${NAMESPACES.STELLAR}:testnet`,
    },
    TRON: {
        MAINNET: `${NAMESPACES.TRON}:mainnet`,
        TESTNET: `${NAMESPACES.TRON}:testnet`,
    },
    HEDERA: {
        MAINNET: `${NAMESPACES.HEDERA}:mainnet`,
        TESTNET: `${NAMESPACES.HEDERA}:testnet`,
    },
    FLOW: {
        MAINNET: `${NAMESPACES.FLOW}:mainnet`,
        TESTNET: `${NAMESPACES.FLOW}:testnet`,
    },
    TEZOS: {
        MAINNET: `${NAMESPACES.TEZOS}:mainnet`,
        TESTNET: `${NAMESPACES.TEZOS}:testnet`,
    },
    ELROND: {
        MAINNET: `${NAMESPACES.ELROND}:1`,
    },
    ZILLIQA: {
        MAINNET: `${NAMESPACES.ZILLIQA}:1`,
    },
    VECHAIN: {
        MAINNET: `${NAMESPACES.VECHAIN}:main`,
    },
    THETA: {
        MAINNET: `${NAMESPACES.THETA}:mainnet`,
    },
    HARMONY: {
        MAINNET: `${NAMESPACES.HARMONY}:0`,
    },
    STARKNET: {
        MAINNET: `${NAMESPACES.STARKNET}:SN_MAIN`,
        TESTNET: `${NAMESPACES.STARKNET}:SN_GOERLI`,
    },
    ZKSYNC: {
        ERA: `${NAMESPACES.ZKSYNC}:era-mainnet`,
        TESTNET: `${NAMESPACES.ZKSYNC}:era-testnet`,
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
    '100': { name: 'Gnosis Chain', currency: 'XDAI' },
    '250': { name: 'Fantom Opera', currency: 'FTM' },
    '42220': { name: 'Celo Mainnet', currency: 'CELO' },
    '1285': { name: 'Moonriver', currency: 'MOVR' },
    '25': { name: 'Cronos Mainnet', currency: 'CRO' },
    '8217': { name: 'Klaytn Mainnet', currency: 'KLAY' },
    '8453': { name: 'Base', currency: 'ETH' },
    '59144': { name: 'Linea', currency: 'ETH' },
    '1088': { name: 'Metis Andromeda', currency: 'METIS' },
    '1313161554': { name: 'Aurora', currency: 'ETH' },
} as const;
