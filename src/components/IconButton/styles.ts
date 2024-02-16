import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  border-radius: 25px;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral[800]}; 
  }
`;