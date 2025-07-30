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
import { getBitcoinAddressData } from '../../store/actions';

export const SearchArea = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.loading);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery.trim()) {
      dispatch(setLoading(true));
      // Add your search logic here
      // should determine what is the searchQuery type
     
      // Simulate search delay
      setTimeout(() => {
        dispatch(setLoading(false));
      }, 1000);
      dispatch(getBitcoinAddressData(searchQuery));
      console.log('Searching for:', searchQuery);
    }
  };

  const handleClear = () => {
    setSearchQuery('');
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
          placeholder="Search for blocks, transactions, or addresses..."
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
            disabled={loading}
            size="large"
          />
        )}
    </SearchAreaContainer>
  );
};