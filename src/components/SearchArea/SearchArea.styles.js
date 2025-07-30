import styled from 'styled-components';
import { Input, Button } from 'antd';

export const SearchAreaContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  height: 50px;
`;

export const SearchInputContainer = styled.div`
  height: calc(100% - 4px);
  display: flex;
  align-items: center;
  background: #ffffff;
  border: 2px solid #e1e5e9;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  width: 100rem;

  &:focus-within {
    border-color: #f7931a;
    box-shadow: 0 4px 12px rgba(247, 147, 26, 0.2);
  }

  &.loading {
    border-color: #f7931a;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 2px 8px rgba(247, 147, 26, 0.1);
    }
    50% {
      box-shadow: 0 2px 8px rgba(247, 147, 26, 0.3);
    }
    100% {
      box-shadow: 0 2px 8px rgba(247, 147, 26, 0.1);
    }
  }

  /* Dark theme support */
  @media (prefers-color-scheme: dark) {
    background: #2d3748;
    border-color: #4a5568;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    border-radius: 8px;
  }
`;

export const StyledInput = styled(Input)`
  height: 100%;
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  color: #333;
  min-width: 0;
  font-size: 16px;

  &::placeholder {
    color: #999;
    font-style: italic;
  }

  &:disabled {
    color: #999;
    cursor: not-allowed;
  }

  /* Dark theme support */
  @media (prefers-color-scheme: dark) {
    color: #e2e8f0;
    
    &::placeholder {
      color: #a0aec0;
    }
  }

  /* Responsive design */
  @media (max-width: 768px) {
    font-size: 14px;
  }

  /* Override Ant Design default styles */
  &.ant-input {
    border: none;
    box-shadow: none;
    background: transparent;
    
    &:focus,
    &:hover {
      border: none;
      box-shadow: none;
    }
  }
`;

export const SearchButton = styled(Button)`
  width: 8rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f7931a !important;
  border-color: #f7931a !important;
  color: white !important;
  border-radius: 8px !important;
  margin-right: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;

  &:hover:not(:disabled) {
    background: #e6851a !important;
    border-color: #e6851a !important;
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(247, 147, 26, 0.3);
  }

  &:disabled {
    background: #cccccc !important;
    border-color: #cccccc !important;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    min-width: 40px;
    height: 40px;
  }

  /* Override Ant Design default styles */
  &.ant-btn {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ClearButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f9fa !important;
  color: #6c757d !important;
  border: none !important;
  border-radius: 50% !important;
  margin-left: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 50px;
  height: 50px;

  &:hover:not(:disabled) {
    background: #e9ecef !important;
    color: #495057 !important;
    transform: scale(1.1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }

  /* Dark theme support */
  @media (prefers-color-scheme: dark) {
    background: #4a5568 !important;
    color: #a0aec0 !important;

    &:hover:not(:disabled) {
      background: #718096 !important;
      color: #e2e8f0 !important;
    }
  }

  /* Responsive design */
  @media (max-width: 768px) {
    min-width: 28px;
    height: 28px;
  }

  /* Override Ant Design default styles */
  &.ant-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  }
`; 