import { Loader } from './SearchResults.styles';
import { useSelector } from 'react-redux';

export const SearchResults = () => {
  
    const {error, bitcoinData, loading} = useSelector(state => state);

    if  (error){
        return <ErrorWrapper>error</ErrorWrapper>
    } else if(loading){
        return <Loader />
    } else{
        return bitcoinData;
    }
};