import { styled } from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral[800]};
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.25rem;
  width: 100%;
`; 

export const Logo = styled.img`
  height: 4rem;
`;