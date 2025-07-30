import './App.css'
import { PageTitle } from './components/PageTitle';
import { SearchArea } from './components/SearchArea/SearchArea';
import { SearchResults } from './components/SearchResults/SearchResults';
import styled from 'styled-components';

const AppContainer = styled.div`
  height: 100%;
  width: calc(100% - 40px);
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
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
