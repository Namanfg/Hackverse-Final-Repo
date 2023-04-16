import '@/styles/globals.css'
import { ThirdwebProvider } from "@thirdweb-dev/react";
import network from '../utils/network'
const contractAbi = [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "symbol",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  // other functions and variables of your smart contract
];

const contractAddress = '0xd9145CCE52D386f254917e481eB44e9943F39138'; // the address of your smart contract on the blockchain

const contractInstance = new web3.eth.Contract(contractAbi, contractAddress);


export default function App({ Component, pageProps }) {
  return (
    <ThirdwebProvider activeChain={network}>
      <Component {...pageProps} />
    </ThirdwebProvider>
    
  );
}
