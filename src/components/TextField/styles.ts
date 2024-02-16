import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  height: 3.5rem;
  width: 15rem;
  border: 1px solid ${({ theme }) => theme.colors.neutral[0]};
  gap: 8px;
  margin: 1.25rem;
  width: 100%;
  justify-self: center;
`;

export const NameTextField = styled.input`
  border: none;
  outline: none;
  background: none;
  color: ${({ theme }) => theme.colors.neutral[0]};
`;
