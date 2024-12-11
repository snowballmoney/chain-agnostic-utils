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

- Move-based
    - Movement
    - Aptos
    - Sui

- Others
    - Solana
    - Cosmos ecosystem
    - Bitcoin (BIP-122)
    - StarkNet

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

## License

MIT

## Related
- [CAIP-2 Specification](https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-2.md)
- [Chain Agnostic Improvement Proposals](https://github.com/ChainAgnostic/CAIPs)