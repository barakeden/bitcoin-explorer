import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SearchOutlined, CloseOutlined } from '@ant-design/icons';
import { setLoading } from '../../store/actions';
import { 
  SearchAreaContainer, 
  SearchInputContainer, 
  StyledInput, 
  SearchButton, 
  ClearButton 
} from './SearchArea.styles';
import { addressRegex, txRegex } from '../../utils/utils'
import { getBitcoinAddressData, getBitcoinTransactionData, clearData, fetchBitcoinDataFailure } from '../../store/actions';

export const SearchArea = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.loading);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
      dispatch(clearData());

      if (searchQuery.trim()) {
      dispatch(setLoading(true));
      const input = searchQuery.trim();
      
      if (addressRegex.test(input)) {
      // It's a Bitcoin address
      dispatch(getBitcoinAddressData(input));
      } else if (txRegex.test(input)) {
        // It's a transaction hash
        dispatch(getBitcoinTransactionData(input));
      } else {
        setTimeout(() => { 
          dispatch(setLoading(false));
          dispatch(fetchBitcoinDataFailure("Invalid input"));

        }, 1000);
        
      }
      console.log('Searching for:', searchQuery);
    }
  };

  const handleClear = () => {
    setSearchQuery('');
    dispatch(clearData());
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <SearchAreaContainer className='SearchAreaContainer'>
      <SearchInputContainer className='SearchInputContainer'>
        <StyledInput
          placeholder="Search for transactions or addresses..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyPress}
          disabled={loading}
          size="large"
        />
        </SearchInputContainer>
        <SearchButton className='SearchButton'
          type="primary"
          icon={<SearchOutlined />}
          onClick={handleSearch}
          disabled={loading || !searchQuery.trim()}
          loading={loading}
        >Search</SearchButton>
        
        
        {searchQuery && (
          <ClearButton
            type="text"
            icon={<CloseOutlined />}
            onClick={handleClear}
            size="large"
          />
        )}
    </SearchAreaContainer>
  );
};