import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })
const Web3 = require('web3');
const web3 = new Web3('https://thirdweb.com/mumbai/0x4EE7e7905f038C4796BBb33C0477750A68f7dB6e/');

export default function Home() {
  return (
    <main>
      <h1 className='text-xl text-green-500 '>Hello world</h1>
      
      
      <Header/>
      
    </main>
  )
}
