import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import InvoicePage from "../Components/InvoicePage.tsx";
const { ethers } = require("ethers");

afterEach(() => {
  jest.restoreAllMocks();
  jest.clearAllMocks();
});

jest.mock("ethers", () => ({
  ethers: {
    JsonRpcProvider: jest.fn(),
    Contract: jest.fn(() => ({
      createMemeWar: jest.fn().mockResolvedValue({ hash: "0x123456789abcdef" }),
    })),
  },
}));

describe("InvoicePage Component", () => {
  it("should call the createMemeWar function and display the transaction hash", async () => {
    render(<InvoicePage />);

    const payButton = screen.getByText("Pay Invoice");
    fireEvent.click(payButton);

    // Wait for the transaction hash to be displayed
    await waitFor(() => {
      expect(screen.getByText(/Transaction Hash/i)).toBeInTheDocument();
    });
  });

  it("should show error message if the transaction fails", async () => {
    // ✅ Override ethers.Contract.createMemeWar to fail for this test
    ethers.Contract.mockImplementationOnce(() => ({
      createMemeWar: jest.fn().mockRejectedValue(new Error("Transaction failed")),
    }));

    // Mock console.error to prevent test output clutter
    jest.spyOn(console, "error").mockImplementation(() => {});

    render(<InvoicePage />);

    const payButton = screen.getByText("Pay Invoice");
    fireEvent.click(payButton);

    await waitFor(() => {
      expect(console.error).toHaveBeenCalledWith("Error during transaction:", expect.any(Error));
    });

    // Restore console.error after test
    console.error.mockRestore();
  });
});
