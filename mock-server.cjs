const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

// Mock Bitcoin address data with the specified response format
const mockAddressData = {
  // Legacy P2PKH address (starts with 1)
  '1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2': {
    address: '1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2',
    balance: '1.50000000',
    transaction_count: 25
  },
  // Legacy P2SH address (starts with 3)
  '3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy': {
    address: '3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy',
    balance: '0.75000000',
    transaction_count: 15
  },
  // Bech32 address (starts with bc1)
  'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh': {
    address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
    balance: '0.00000000',
    transaction_count: 100
  },
  // Genesis block address
  '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa': {
    address: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
    balance: '0.01234567',
    transaction_count: 123
  }
}

// Mock Bitcoin transaction data with the specified response format
const mockTransactionData = {
  // Valid 64-character hex transaction hash
  '4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b': {
    hash: '4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b',
    fee: '0.00001000',
    inputs: [
      {
        address: '1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2',
        amount: '1.00000000'
      }
    ],
    outputs: [
      {
        address: '3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy',
        amount: '0.99999000'
      }
    ],
    transaction_index: 0,
    block_time: '2023-01-15T14:30:00Z'
  },
  // Another valid transaction hash
  'f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16': {
    hash: 'f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16',
    fee: '0.00002000',
    inputs: [
      {
        address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
        amount: '0.50000000'
      }
    ],
    outputs: [
      {
        address: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
        amount: '0.49998000'
      }
    ],
    transaction_index: 1,
    block_time: '2023-02-10T09:45:30Z'
  },
  // Genesis block transaction
  '4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda44c': {
    hash: '4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda44c',
    fee: '0.00000000',
    inputs: [],
    outputs: [
      {
        address: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
        amount: '50.00000000'
      }
    ],
    transaction_index: 0,
    block_time: '2009-01-03T18:15:05Z'
  },
  // Multi-input/output transaction example
  'abc123def456789012345678901234567890123456789012345678901234567890': {
    hash: 'abc123def456789012345678901234567890123456789012345678901234567890',
    fee: '0.00001234',
    inputs: [
      {
        address: '1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2',
        amount: '0.5'
      },
      {
        address: '3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy',
        amount: '0.2'
      }
    ],
    outputs: [
      {
        address: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
        amount: '0.69'
      },
      {
        address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
        amount: '0.009'
      }
    ],
    transaction_index: 0,
    block_time: '2023-01-15T14:30:00Z'
  }
}

// Regex patterns for validation
const addressRegex = /^(1|3)[a-km-zA-HJ-NP-Z1-9]{25,34}$|^bc1[a-z0-9]{39,59}$/i;
const txRegex = /^[A-Fa-f0-9]{64}$/;

// Bitcoin API routes with regex validation
app.get('/address/:address', (req, res) => {
  const { address } = req.params
  
  // Validate address format
  if (!addressRegex.test(address)) {
    return res.status(400).json({ error: 'Invalid Bitcoin address' })
  }
  
  const addressData = mockAddressData[address]
  
  if (addressData) {
    res.json(addressData)
  } else {
    res.status(404).json({ error: 'Invalid Bitcoin address' })
  }
})

app.get('/transaction/:txHash', (req, res) => {
  const { txHash } = req.params
  
  // Validate transaction hash format
  if (!txRegex.test(txHash)) {
    return res.status(400).json({ error: 'Transaction not found' })
  }
  
  const transactionData = mockTransactionData[txHash]
  
  if (transactionData) {
    res.json(transactionData)
  } else {
    res.status(404).json({ error: 'Transaction not found' })
  }
})

app.listen(PORT, () => {
  console.log(`Mock server running on http://localhost:${PORT}`)
})