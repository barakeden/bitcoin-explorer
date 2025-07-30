import { getResponseMock } from "../utils/utils";
// Action Types
export const FETCH_BITCOIN_DATA = 'FETCH_BITCOIN_DATA';
export const FETCH_BITCOIN_DATA_SUCCESS = 'FETCH_BITCOIN_DATA_SUCCESS';
export const FETCH_BITCOIN_DATA_FAILURE = 'FETCH_BITCOIN_DATA_FAILURE';
export const SET_THEME = 'SET_THEME';
export const SET_LOADING = 'SET_LOADING';
export const CLEAR_DATA = 'CLEAR_DATA';

// Action Creators
export const fetchBitcoinData = () => ({
  type: FETCH_BITCOIN_DATA
});

export const fetchBitcoinDataSuccess = (data) => ({
  type: FETCH_BITCOIN_DATA_SUCCESS,
  payload: data
});

export const fetchBitcoinDataFailure = (error) => ({
  type: FETCH_BITCOIN_DATA_FAILURE,
  payload: error
});

export const setTheme = (theme) => ({
  type: SET_THEME,
  payload: theme
});

export const setLoading = (loading) => ({
  type: SET_LOADING,
  payload: loading
});

export const clearData = () => ({
  type: CLEAR_DATA,
})

// Async Action Creator for Bitcoin Address Data
export const getBitcoinAddressData = (address) => {
  return async (dispatch) => {
    if (!address || address.trim() === '') {
      dispatch(fetchBitcoinDataFailure('Address is required'));
      return;
    }
    dispatch(fetchBitcoinData());
    
    try {
        // await fetch(`http://localhost:3000/address/${address}`);
      const response = getResponseMock(address);
      if (response) {      
        dispatch(fetchBitcoinDataSuccess({ ...response, type: 'address' }));
      } else {
        dispatch(fetchBitcoinDataFailure("Invalid bitcoin address"));
      }
    } catch (error) {
      console.error('Error fetching Bitcoin address data:', error);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

// Async Action Creator for Bitcoin transaction Data
export const getBitcoinTransactionData = (transactionHash) => {
  return async (dispatch) => {
    if (!transactionHash || transactionHash.trim() === '') {
      dispatch(fetchBitcoinDataFailure('Transaction Hash is required'));
      return;
    }
    dispatch(fetchBitcoinData());
    
    try {
      const response = getResponseMock(transactionHash);
      if (response) {      
        dispatch(fetchBitcoinDataSuccess({ ...response, type: 'transaction' }));
      } else {
        dispatch(fetchBitcoinDataFailure("Invalid bitcoin transactionHash"));
      }
    } catch (error) {
      console.error('Error fetching Bitcoin address data:', error);
    } finally {
      dispatch(setLoading(false));
    }
  };
};
