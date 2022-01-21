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

const StyledFormButton = styled.button<{ $ignorePadding?: boolean }>`
  display: block;
  padding: ${({ $ignorePadding }) => ($ignorePadding ? "0" : "16px")};
  border: none;
  background: none;
  cursor: pointer;
  overflow: hidden;
  &:focus {
    outline: none;
  }
`;

const FormButtonChildrenContainer = styled.span<{ $size: "lg" | "md" | "sm" }>`
  font-size: ${({ theme, $size }) =>
    $size === "lg"
      ? theme.font.size.lg
      : $size === "md"
      ? theme.font.size.md
      : theme.font.size.sm};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.textSec};
  ${StyledFormButton}:hover & {
    color: ${({ theme }) => theme.colors.textPri};
  }
  ${StyledFormButton}:focus & {
    color: ${({ theme }) => theme.colors.textPri};
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
  ${StyledButton}:focus & {
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

export const FormButton: React.FC<{ ignorePadding?: boolean }> = ({
  children,
  ignorePadding,
}) => (
  <StyledFormButton type="submit" $ignorePadding={ignorePadding}>
    <FormButtonChildrenContainer $size="md">
      {children}
    </FormButtonChildrenContainer>
  </StyledFormButton>
);

// *********************
//     ICON BUTTON
// *********************

const StyledIconButton = styled.button`
  margin: 0;
  padding: 0;
  border: 0;
  outline: none;
  background: transparent;
  cursor: pointer;
`;

const IconContainer = styled.div`
  transition: ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};
  width: 36px;
  height: 36px;
  padding: 8px;

  background-color: ${({ theme }) => theme.colors.transparent};
  color: ${({ theme }) => theme.colors.textPri};

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;

const SvgWithStrokeAsPrimaryColor = styled.svg`
  color: inherit;
  stroke: currentColor;
  fill: none;
  width: 20px;
  height: 20px;
`;

type IconNames = "remove";

const icons = {
  remove: {
    Component: () => (
      <SvgWithStrokeAsPrimaryColor
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="33"
        viewBox="0 0 30 33"
      >
        <g transform="translate(-3 -1.5)">
          <path
            d="M4.5,9h27"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
          <path
            d="M28.5,9V30a3,3,0,0,1-3,3h-15a3,3,0,0,1-3-3V9M12,9V6a3,3,0,0,1,3-3h6a3,3,0,0,1,3,3V9"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
          <path
            d="M15,16.5v9"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
          <path
            d="M21,16.5v9"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
        </g>
      </SvgWithStrokeAsPrimaryColor>
    ),
  },
};

export const IconButton: React.FC<{
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  name: IconNames;
}> = ({ onClick, name }) => {
  const Ic = icons[name].Component;

  return (
    <StyledIconButton onClick={onClick}>
      <IconContainer>
        <Ic />
      </IconContainer>
    </StyledIconButton>
  );
};
