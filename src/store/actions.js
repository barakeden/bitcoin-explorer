// Action Types
export const FETCH_BITCOIN_DATA = 'FETCH_BITCOIN_DATA';
export const FETCH_BITCOIN_DATA_SUCCESS = 'FETCH_BITCOIN_DATA_SUCCESS';
export const FETCH_BITCOIN_DATA_FAILURE = 'FETCH_BITCOIN_DATA_FAILURE';
export const SET_THEME = 'SET_THEME';
export const SET_LOADING = 'SET_LOADING';

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

// Async Action Creator for Bitcoin Address Data
export const getBitcoinAddressData = (address) => {
  return async (dispatch) => {
    if (!address || address.trim() === '') {
      dispatch(fetchBitcoinDataFailure('Address is required'));
      return;
    }

    dispatch(setLoading(true));
    dispatch(fetchBitcoinData());
    
    try {
    //   const response = {
    //     "address": "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa", "balance": "0.01234567", "transaction_count": 123
    //     };
        // await fetch(`http://localhost:3000/address/${address}`);
      const response = getResponseMock(address);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Validate expected response format
      if (!data.address || !data.balance || data.transaction_count === undefined) {
        throw new Error('Invalid response format from server');
      }
      
      dispatch(fetchBitcoinDataSuccess(data));
    } catch (error) {
      console.error('Error fetching Bitcoin address data:', error);
      dispatch(fetchBitcoinDataFailure(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };
};

const getResponseMock = () => {}