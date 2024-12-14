import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  XRPL_EVM_SIDECHAIN_DEVNET = 1440002,
  ROOT_NETWORK_TESTNET = 7672,
  ROOT_NETWORK_MAINNET = 7668
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS = {
  [ChainId.XRPL_EVM_SIDECHAIN_DEVNET]: '0xFCb3A13CE8C323bBACE3388ed9806C05Dc9F5486',
  [ChainId.ROOT_NETWORK_TESTNET]: '0xCc6ec27A1B31167d9785efBf9F07a8f88b5DA9A0',
  [ChainId.ROOT_NETWORK_MAINNET]: '0xFCb3A13CE8C323bBACE3388ed9806C05Dc9F5486'
}

export const INIT_CODE_HASH = '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
