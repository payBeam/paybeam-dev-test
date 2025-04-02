# **Frontend Developer Testing Guide: InvoicePage Component**  

This guide will help you modify the existing `InvoicePage` component to meet the test requirements. Your task is to integrate the UI with BNB blockchain interactions, manage transaction states, and ensure that your implementation successfully handles both successful transactions and failures.  

The smart contract's ABI is already provided in the `Contract/abi.json` file, so you should use it when creating the contract instance.  

## **Testing Overview**  

The tests for this component validate the following scenarios:  

1. **Success Scenario:**  
   When the `createMemeWar` function executes successfully, the transaction hash should be displayed on the screen.  

2. **Failure Scenario:**  
   If the transaction fails, an error should be logged to the console with the message `"Error during transaction:"`.  

## **Steps to Modify the `InvoicePage` Component**  

### **1. Edit the Existing Component**  
The `InvoicePage` component is already created. You need to modify it to:  
   - **Use the provided smart contract ABI** from `Contract/abi.json`.  
   - **Implement a button** labeled `"Pay Invoice"` that, when clicked, triggers the blockchain transaction.  
   - **Display the transaction hash** when a transaction succeeds.  
   - **Handle transaction errors** by logging them to the console.  

### **2. Connect to the Ethereum Smart Contract**  
   - **Install Dependencies (if not installed):**  
     ```bash
     npm install ethers
     ```  
   - **Use `ethers.JsonRpcProvider`** to connect to an Ethereum node.  
   - **Create an instance of the contract** using `ethers.Contract`, passing the contract address, ABI, and signer.  
   - **Call `createMemeWar`** to initiate the transaction with the following parameters:  
     ```js
     const tx = await contract.createMemeWar(
       "payBeam",  // meme1URL
       2025,       // pointTarget
       "payBeam"   // description
     );
     ```  

### **3. Handle the Transaction**  
   - **On Button Click:** Call the `createMemeWar` function.  
   - **On Success:** Extract the transaction hash (`tx.hash`) and display it in the UI.  
   - **On Failure:** Catch any error and log it to the console with `"Error during transaction:"`.  

### **4. Contract Details**  `0x170e49be4c4D11eD393447c6406558fF50F79DFc`  
   - **Blockchain Explorer URL:** `https://testnet.bscscan.com/address/0x170e49be4c4D11eD393447c6406558fF50F79DFc`  

### **5. Mocking for Tests**  
   To pass the tests:  
   - **Test 1 (Success):** Mock `createMemeWar` to resolve successfully and return a mock transaction hash (`"0x123456789abcdef"`). The hash should be displayed on the UI.  
   - **Test 2 (Failure):** Mock `createMemeWar` to reject with an error. Ensure that the error is logged to the console as expected.  

---

If everything is implemented correctly, the tests should pass. Run the tests using:  

```bash
npx jest
```  

If the tests pass successfully, you’ve completed the task! 🚀