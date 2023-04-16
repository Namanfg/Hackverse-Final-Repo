import { ChainId } from "@thirdweb-dev/react";

export default ChainId.Mumbai;

const accountAddress = '0xDB87F25003Cf20239aF58Dc2C3A860Bc475C7aC5'; // the Ethereum address of your account on the blockchain
const privateKey = '0xDB87F25003Cf20239aF58Dc2C3A860Bc475C7aC5'; // the private key of your account

const contractInstance = new web3.eth.Contract(contractAbi, contractAddress);

const myAccount = web3.eth.accounts.privateKeyToAccount(privateKey);
web3.eth.accounts.wallet.add(myAccount);

contractInstance.methods.functionName().send({
  from: accountAddress,
  gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
  gasLimit: web3.utils.toHex(600000),
  value: web3.utils.toHex(web3.utils.toWei('1', 'ether')),
})
.then((receipt) => {
  // handle the receipt
})
.catch((error) => {
  // handle the error
});


