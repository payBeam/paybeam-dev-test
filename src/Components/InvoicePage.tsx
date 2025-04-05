"use client"
import React, { useState } from 'react';
import { ethers } from 'ethers';
import contractABI from '../Contract/abi.json';

const InvoicePage = () => {
  const [transactionHash, setTransactionHash] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const CONTRACT_ADDRESS = '0x170e49be4c4D11eD393447c6406558fF50F79DFc';

  const handlePayInvoice = async () => {
    setIsLoading(true);
    setError(null);
    setTransactionHash(null);

    try {
      const provider = new ethers.JsonRpcProvider();
      
      const contract = new ethers.Contract(CONTRACT_ADDRESS, contractABI, provider);
      
      const tx = await contract.createMemeWar(
        "payBeam",  
        2025,       
        "payBeam"  
      );
      
      setTransactionHash(tx.hash);
    } catch (err: any) {
      setError(err.message);
      console.error("Error during transaction:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="invoice-page">
      <h1>Invoice Payment</h1>
      <div className="invoice-details">
        <p>Service: Premium Subscription</p>
        <p>Amount: 0.1 BNB</p>
        <p>Due Date: April 15, 2025</p>
      </div>
      
      <button 
        onClick={handlePayInvoice}
        disabled={isLoading}
        className="pay-button"
      >
        {isLoading ? 'Processing...' : 'Pay Invoice'}
      </button>
      
      {transactionHash && (
        <div className="success-message">
          <h3>Payment Successful!</h3>
          <p>Transaction Hash: {transactionHash}</p>
          <a 
            href={`https://testnet.bscscan.com/tx/${transactionHash}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on BSC Scan
          </a>
        </div>
      )}
      
      {error && (
        <div className="error-message">
          <p>Transaction Failed. Please try again.</p>
        </div>
      )}
    </div>
  );
};

export default InvoicePage;