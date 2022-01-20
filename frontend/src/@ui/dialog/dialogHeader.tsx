import React from "react";
import styled from "styled-components";

export const Header = styled.div`
  margin-bottom: 20px;
  height: 27px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const DialogHeader: React.FC<{ close: any }> = ({ children, close }) => (
  <Header>
    <span>{children}</span>

    <button
      onClick={(e) => {
        e.stopPropagation();
        close();
      }}
    >
      X
    </button>
  </Header>
);
