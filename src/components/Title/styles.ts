import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 3rem;

  @media (max-width: px) {
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
`;

export const Logo = styled.img`
  height: 8rem;
`;