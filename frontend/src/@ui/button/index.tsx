import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: block;
  padding: 16px;
  border: none;
  background: none;
  cursor: pointer;
  height: 80px;
  overflow: hidden;
  &:focus {
    outline: none;
  }
`;

const ChildrenContainer = styled.span`
  font-size: ${({ theme }) => theme.font.size.lg};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.textSec};
  ${StyledButton}:hover & {
    color: ${({ theme }) => theme.colors.textPri};
  }
`;

const Underline = styled.div`
  position: relative;
  height: 10px;
  width: 75%;
  background-color: ${({ theme }) => theme.colors.bg2};
  margin-left: auto;
  z-index: -10;
  transition: ${({ theme }) => theme.transition};

  top: 0;

  ${StyledButton}:hover & {
    top: -20px;
    height: 30px;
  }
`;

export const Button: React.FC<{
  inverted?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}> = ({ onClick, inverted, children }) => (
  <StyledButton onClick={onClick}>
    <ChildrenContainer>{children}</ChildrenContainer>
    <Underline />
  </StyledButton>
);
