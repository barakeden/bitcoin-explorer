import {
  FETCH_BITCOIN_DATA,
  FETCH_BITCOIN_DATA_SUCCESS,
  FETCH_BITCOIN_DATA_FAILURE,
  SET_THEME,
  SET_LOADING,
  CLEAR_DATA
} from './actions';

const initialState = {
  bitcoinData: null,
  loading: false,
  error: null,
  theme: 'dark'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BITCOIN_DATA:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_BITCOIN_DATA_SUCCESS:
      return {
        ...state,
        bitcoinData: action.payload,
        loading: false,
        error: null
      };

    case FETCH_BITCOIN_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case SET_THEME:
      return {
        ...state,
        theme: action.payload
      };

    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };

    case CLEAR_DATA:
      return {
        ...state,
        bitcoinData: null,
        loading: false,
        error: null,     
      };

    default:
      return state;
  }
};

export default reducer; 