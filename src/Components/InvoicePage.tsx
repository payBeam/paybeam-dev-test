import React from 'react';

const InvoicePage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen p-4">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg text-center space-y-4 border border-gray-200">
        <h1 className="text-3xl font-semibold text-gray-900">Invoice Payment</h1>
        <p className="text-lg text-gray-700">
          Edit this page with the instructions in the README to pass the test.
        </p>
        <p className="text-sm text-gray-500">
          Run <code className="font-mono bg-gray-200 px-2 py-1 rounded">npx jest</code> to see if the test passes.
        </p>
        <p className="text-sm text-gray-500">
        Good luck!
        </p>
      </div>
    </div>
  );
};

export default InvoicePage;
