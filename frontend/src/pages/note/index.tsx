import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Dialog, { DIALOG_TRANSITION_DURATION } from "../../@ui/dialog";
import { useNoteLazyQuery } from "../../gql/generated/graphql";

const ContentContainer = styled.div`
  padding: 10px;
  height: 240px;
  background-color: ${({ theme }) => theme.colors.transparent};
  transition: ${({ theme }) => theme.transition};
`;

const NoteTitle = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.font.size.md};
  color: ${({ theme }) => theme.colors.textPri};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  max-width: 100%;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-all;
  white-space: pre-wrap;
  margin-bottom: 12px;
`;

const NoteBody = styled.span`
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-all;
  white-space: pre-wrap;
`;

const NotePage = () => {
  let navigate = useNavigate();

  let { id } = useParams<"id">();

  const [openDialog, setOpenDialog] = useState(false);

  const [queryNote, { data, loading }] = useNoteLazyQuery();

  useEffect(() => {
    if (id) {
      queryNote({
        variables: {
          id,
        },
      });
    }
  }, [id]);

  useEffect(() => {
    setOpenDialog(true);
  }, []);

  function closeDialog() {
    setOpenDialog(false);
    setTimeout(() => {
      navigate(-1);
    }, DIALOG_TRANSITION_DURATION);
  }

  return (
    <Dialog aria-labelledby="label" close={closeDialog} open={openDialog}>
      {loading && <span>loading...</span>}
      {data?.note && (
        <ContentContainer>
          <NoteTitle>{data.note.title}</NoteTitle>
          <NoteBody>{data.note.body}</NoteBody>
        </ContentContainer>
      )}
    </Dialog>
  );
};

export default NotePage;
