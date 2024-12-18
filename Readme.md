# chain-agnostic-utils

A lightweight TypeScript library implementing CAIP-2 (Chain Agnostic Improvement Proposal) standards for blockchain network identification. Makes cross-chain development simpler and more reliable.

## Why?

Different blockchains use different ways to identify their networks:
- Ethereum and other EVM chains use numeric chain IDs (1, 56, 137...)
- Solana uses cluster names (mainnet-beta, devnet...)
- Some chains have colliding IDs (Ethereum and Aptos both use 1 for mainnet)

This package provides a standardized way to identify any blockchain network using the CAIP-2 format: `namespace:reference`

## Installation

```bash
npm install chain-agnostic-utils
# or
yarn add chain-agnostic-utils
```

## Usage

### Basic Network Identification

```typescript
import { NETWORKS, isValidCAIP2 } from 'chain-agnostic-utils';

// Get network identifiers
const ethMainnet = NETWORKS.ETHEREUM.MAINNET;    // 'eip155:1'
const solMainnet = NETWORKS.SOLANA.MAINNET;      // 'solana:mainnet-beta'
const movementMain = NETWORKS.MOVEMENT.MAINNET;   // 'move-mvmt:126'

// Validate CAIP-2 identifiers
console.log(isValidCAIP2(ethMainnet));  // true
console.log(isValidCAIP2('invalid'));   // false
```

### Network Metadata

```typescript
import { NETWORK_METADATA, getNetworkMetadata } from 'chain-agnostic-utils';

const ethData = NETWORK_METADATA[NETWORKS.ETHEREUM.MAINNET];
console.log(ethData);
// {
//   name: 'Ethereum Mainnet',
//   currency: 'ETH',
//   icon: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png',
//   explorerUrl: 'https://etherscan.io'
// }
```

### Using CAIP2Manager

The CAIP2Manager provides a flexible way to manage network metadata, combining built-in networks with your custom ones.

```typescript
import { CAIP2Manager } from 'chain-agnostic-utils';

// Get the singleton instance
const manager = CAIP2Manager.getInstance();

// Initialize with both default and custom networks
manager.init({
    defaultNetworks: true, // include all built-in networks
    networks: {
        'eip155:11155111': {
            name: 'Sepolia',
            currency: 'ETH',
            icon: 'path/to/icon',
            explorerUrl: 'https://sepolia.etherscan.io',
            rpcUrl: 'https://rpc.sepolia.org'
        }
    }
});

// Access network metadata
const ethData = manager.getNetwork('eip155:1');
const isSupported = manager.hasNetwork('eip155:1');

// Add new networks dynamically
manager.addNetwork('eip155:123456', {
    name: 'My Custom Network',
    currency: 'TOKEN',
    icon: 'path/to/icon'
});

// Get all registered networks
const allNetworks = manager.getAllNetworks();
```

### Parse CAIP-2 Identifiers

```typescript
import { parseCAIP2 } from 'chain-agnostic-utils';

const { namespace, reference } = parseCAIP2('eip155:1');
console.log(namespace);  // 'eip155'
console.log(reference);  // '1'
```

## Supported Networks

- EVM-based (eip155)
  - Ethereum
  - BNB Smart Chain
  - Polygon
  - Arbitrum
  - Optimism
  - Avalanche
  - Base
  - Linea
  - and more...

- Move-based
  - Movement
  - Aptos
  - Sui

- Layer 1 Ecosystems
  - Bitcoin (BIP-122)
  - Solana
  - Cardano
  - Polkadot
  - Cosmos
  - NEAR
  - and more...

- Layer 2 Solutions
  - StarkNet
  - zkSync
  - Linea
  - and more...

## Network Metadata

Each network includes metadata with:
- Name
- Native currency
- Icon URL
- Explorer URL
- RPC URL (for applicable networks)

## Contributing

Contributions are welcome! Feel free to:
- Add support for new networks
- Improve documentation
- Report issues
- Submit pull requests

## Future Plans

- Add more network metadata
- Add chain-specific validation rules
- Add support for CAIP-10 (account identifiers)
- Add support for more networks
- Add network-specific RPC methods
- Enhanced metadata management

## License

MIT

## Related
- [CAIP-2 Specification](https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-2.md)
- [Chain Agnostic Improvement Proposals](https://github.com/ChainAgnostic/CAIPs)