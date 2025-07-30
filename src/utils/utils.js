
export const addressRegex = /^(1|3)[a-km-zA-HJ-NP-Z1-9]{25,34}$|^bc1[a-z0-9]{39,59}$/i;
export const txRegex = /^[A-Fa-f0-9]{64}$/;

export const getResponseMock = (id) => {
    const mockTxHash = "a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2";
  
    if (id === "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa") {
      return {
        address: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
        balance: "0.01234567",
        transaction_count: 123,
        type: "address"
      };
    } else if (id === mockTxHash) {
      return {
        hash: mockTxHash,
        fee: "0.00001234",
        inputs: [
          { address: "1ABC...", amount: "0.5" },
          { address: "1XYZ...", amount: "0.2" }
        ],
        outputs: [
          { address: "1DEF...", amount: "0.69" },
          { address: "1GHI...", amount: "0.009" }
        ],
        transaction_index: 0,
        block_time: "2023-01-15T14:30:00Z",
        type: "transaction"
      };
    } else {
      return null;
    }
  };

export const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text).then(() => {
    console.log('Text copied to clipboard');
  }).catch(err => {
    console.error('Failed to copy text: ', err);
  });
};