import React, { useState } from "react";
import styled from "styled-components";
import { useNotesQuery } from "../../gql/generated/graphql";
import AddNote from "./addNote";
import Notes from "./notes";

const HeaderContainer = styled.div`
  margin-bottom: 150px;
`;

const HomePage: React.FC = () => {
  const { data, loading } = useNotesQuery();

  return (
    <div>
      <HeaderContainer>
        <AddNote />
        {loading && <span>loading...</span>}
        {data && data.notes && <Notes notes={data.notes} />}
      </HeaderContainer>
    </div>
  );
};

export default HomePage;
