import React from "react";
import { Link, useLocation } from "react-router-dom";

import styled from "styled-components";
import { breakpoints } from "../../theme/media";
import { NoteT } from "../note";

const GridContainer = styled.ul`
  padding: 0;
  margin: 0;
  width: 100%;
  display: grid;
  grid-column-gap: 12px;
  grid-row-gap: 12px;
  grid-template-columns: repeat(4, 1fr);

  ${breakpoints.down("md")} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${breakpoints.down("sm")} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const GridItem = styled.li`
  list-style: none;
  justify-self: stretch;
  align-self: stretch;
  overflow: hidden;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textPri};
`;

const ContentContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.bg2};
  padding: 10px;
  height: 240px;
`;

const Notes: React.FC<{ notes: NoteT[] }> = ({ notes }) => {
  let location = useLocation();

  return (
    <GridContainer>
      {notes.map((n) => (
        <GridItem>
          <StyledLink
            to={`/note/${n.id}`}
            state={{ backgroundLocation: location }}
          >
            <ContentContainer>{JSON.stringify(n)}</ContentContainer>
          </StyledLink>
        </GridItem>
      ))}
    </GridContainer>
  );
};

export default Notes;
