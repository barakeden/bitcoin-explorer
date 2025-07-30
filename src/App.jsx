import './App.css'
import { PageTitle } from './components/PageTitle';
import { SearchArea } from './components/SearchArea/SearchArea';
import { SearchResults } from './components/SearchResults/SearchResults';
import { ThemeToggle } from './components/ThemeToggle';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
  height: 100%;
  width: calc(100% - 40px);
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: var(--background-color);
  color: var(--text-color);
`;

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <AppContainer className='AppContainer'>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <PageTitle />
      <SearchArea />
      <SearchResults />
    </AppContainer>
  )
}

export default App
