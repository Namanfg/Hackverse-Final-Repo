mport React from "react";
import {useAddress,useDisconnect,useMetamask} from "@thirdweb-dev/react";
type Props = {};

function Header({}:Props){
    const connectWithMetamask = useMetamask();
    const disconnect = useDisconnect();
    const address = useAddress();
    return(
        <div>
            <nav className="flex justify-between">
                <div className="flex items-center space-x-2 text-sm">
                    {address ?(
                        <button onClick={disconnect} className="connectWalletBtn">Hi, {address.slice(0,5)+"...."+address.slice(-4)}</button>
                    ):(
                <button onClick={connectWithMetamask} className="connectWalletBtn">Connect your wallet</button>
                  ) }
                  <p className="headerLink">Daily Deals</p>
                  <p className="headerLink">Help & Contact</p>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                    <p className="headerLink">Ship to</p>
                    <p className="headerLink">Sell</p>
                    <p className="headerLink">WatchList</p>

                    <Link href="/addItem">   Add to inventory  </Link>
                </div>
            </nav>
        </div>
    )
}


export default Header;