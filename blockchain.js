import Web3 from 'web3';
import { Connection, PublicKey } from '@solana/web3.js';
// import pkg from 'ton-client-js';
// import { Client, LocalAddress, CryptoUtils, LoomProvider } from 'loom-js';

// const { TonClient } = pkg;

// Initialize web3 instances for different blockchains
const ethWeb3 = new Web3(
  'https://mainnet.infura.io/v3/48d61a9317d0426ebd0abbc5455ef424'
); // Ethereum
const bscWeb3 = new Web3('https://bsc-dataseed.binance.org/'); // Binance Smart Chain
const solConnection = new Connection('https://api.mainnet-beta.solana.com'); // Solana
// const tonClient = TonClient.create();
// const baseClient = new Client('extdev-plasma-us1', 'wss://extdev-plasma-us1.dappchains.com/websocket', 'wss://extdev-plasma-us1.dappchains.com/queryws'); // Basechain

export async function identifyBlockchain(contractAddress) {
  try {
    // Try to get the code at the contract address on Ethereum
    const ethCode = await ethWeb3.eth.getCode(contractAddress);
    if (ethCode !== '0x') {
      return 'eth';
    }
  } catch (error) {
    console.error('Error checking Ethereum:', error);
  }

  try {
    // Try to get the code at the contract address on Binance Smart Chain
    const bscCode = await bscWeb3.eth.getCode(contractAddress);
    if (bscCode !== '0x') {
      return 'bsc';
    }
  } catch (error) {
    console.error('Error checking Binance Smart Chain:', error);
  }
  try {
    // Try to get the account info at the contract address on Solana
    const solAccountInfo = await solConnection.getAccountInfo(
      new PublicKey(contractAddress)
    );
    if (solAccountInfo !== null) {
      return 'sol';
    }
  } catch (error) {
    console.error('Error checking Solana:', error);
  }

  // try {
  //   // Try to get the account state at the contract address on Free TON
  //   const tonAccountState = await tonClient.net.query_collection({
  //     collection: 'accounts',
  //     filter: { id: { eq: contractAddress } },
  //     result: 'id'
  //   });
  //   if (tonAccountState.result.length > 0) {
  //     return 'Free TON';
  //   }
  // } catch (error) {
  //   console.error('Error checking Free TON:', error);
  // }

  //   try {
  //     // Try to get the account state at the contract address on Basechain
  //     const baseAccount = LocalAddress.fromHexString(contractAddress);
  //     const baseAccountState = await baseClient.getEvmStateAsync(baseAccount);
  //     if (baseAccountState !== null) {
  //       return 'Basechain';
  //     }
  //   } catch (error) {
  //     console.error('Error checking Basechain:', error);
  //   }

  // If the contract address doesn't exist on any known blockchains
  return 'Unknown';
}
