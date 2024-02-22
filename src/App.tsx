import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

function TokenSymbol() {
    const [symbol, setSymbol] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        async function getTokenData() {
            // URL do nó Ethereum local ou remoto
            const bscProvider = new ethers.JsonRpcProvider('https://bsc-dataseed.binance.org/', { name: 'binance', chainId: 56 });
            // Endereço do contrato do token Uniswap (UNI)
            const tokenAddress = '0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47';

            // Carregue o contrato do token
            const contract = new ethers.Contract(tokenAddress, ["function symbol() view returns (string)", "function name() view returns (string)"], bscProvider);

            try {
                // Chame o método do contrato para obter o símbolo do token
                const tokenSymbol = await contract.symbol();
                setSymbol(tokenSymbol);

                // Chame o método do contrato para obter o nome do token
                const tokenName = await contract.name();
                setName(tokenName);
            } catch (error) {
                console.error('Erro ao obter os detalhes do token:', error);
            }
        }

        getTokenData();
    }, []);

    return (
        <div>
            <h2>Token Details:</h2>
            <p>Symbol: {symbol}</p>
            <p>Name: {name}</p>
        </div>
    );
}

export default TokenSymbol;
