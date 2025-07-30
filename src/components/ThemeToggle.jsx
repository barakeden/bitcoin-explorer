import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ToggleButton = styled.button`
  background-color: ${props => props.theme !== 'light' ? '#f0f0f0' : '#333'};
  color: ${props => props.theme !== 'light' ? '#333' : '#f0f0f0'};
  border: 1px solid ${props => props.theme !== 'light' ? '#ccc' : '#555'};
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1000;

  &:hover {
    opacity: 0.8;
  }
`;

export const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <ToggleButton onClick={toggleTheme} theme={theme}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </ToggleButton>
  );
};
