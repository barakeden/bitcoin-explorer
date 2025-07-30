import './App.css'
import { PageTitle } from './components/PageTitle';
import { SearchArea } from './components/SearchArea/SearchArea';
import { SearchResults } from './components/SearchResults/SearchResults';
import styled from 'styled-components';

const AppContainer = styled.div`
  height: 100%;
  width: 100%;
`;

function App() {
  return (
    <AppContainer className='AppContainer'>
      <PageTitle />
      <SearchArea />
      <SearchResults />
    </AppContainer>
  )
}

export default App
