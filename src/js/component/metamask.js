import React, {useState} from "react";
import { formatEther } from "ethers";

export const MetaMask = () => {

    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [userBalance, setUserBalance] = useState(null);

    const connectWallet = () => {
        if (window.ethereum) {
            window.ethereum.request({method: 'eth_requestAccounts'})
            .then(result => {
                accountChanged([result[0]])
            })
        } else {
            setErrorMessage('Install MetaMask please!!')
        }
    }

    const accountChanged = (accountName) => {
        setDefaultAccount(accountName);
        getBalance(accountName)
    }

    const getBalance = (accountAddress) => {
        window.ethereum.request({method: 'eth_getBalance', params: [String(accountAddress), "latest"]})
        .then(balance => {
            setUserBalance(formatEther(balance));
        })

    }

    return (
        <div>
            <h3>  </h3>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/hPqklIvGknk?si=KpXJBLrOsA_P4cXi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

         
        

            {errorMessage}
      
	
	
			
        </div>
        
    )
}