import { IoArrowBack } from "react-icons/io5";
import { styled } from "styled-components";

export const ArrowBack = styled(IoArrowBack)`
  cursor: pointer;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 8rem;
`;
export const HeaderButton = styled.h2`
  color: ${({ theme }) => theme.colors.neutral[700]};
`;
