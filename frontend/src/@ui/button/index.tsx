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

const StyledFormButton = styled.button`
  display: block;
  padding: 16px;
  border: none;
  background: none;
  cursor: pointer;
  overflow: hidden;
  &:focus {
    outline: none;
  }
`;

const ChildrenContainer = styled.span<{ $size: "lg" | "md" | "sm" }>`
  font-size: ${({ theme, $size }) =>
    $size === "lg"
      ? theme.font.size.lg
      : $size === "md"
      ? theme.font.size.md
      : theme.font.size.sm};
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
}> = ({ inverted, children, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <ChildrenContainer $size="lg">{children}</ChildrenContainer>
      <Underline />
    </StyledButton>
  );
};

export const FormButton: React.FC = ({ children }) => (
  <StyledFormButton type="submit">
    <ChildrenContainer $size="md">{children}</ChildrenContainer>
  </StyledFormButton>
);
