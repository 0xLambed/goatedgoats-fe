// File: ./src/config.js

import {config} from "@onflow/fcl"

config()
  .put("accessNode.api", process.env.REACT_APP_ACCESS_NODE) // Configure FCL's Access Node
  .put("discovery.wallet", process.env.REACT_APP_WALLET_DISCOVERY) // Configure FCL's Wallet Discovery mechanism
  .put("0xProfile", process.env.REACT_APP_CONTRACT_PROFILE) // Will let us use `0xProfile` in our Cadence
  .put("0xVoucher", process.env.REACT_APP_TESTNET_CONTRACT_VOUCHER)
  .put("0xCollectible", process.env.REACT_APP_TESTNET_CONTRACT_COLLECTIBLE)