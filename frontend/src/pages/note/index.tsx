import React, { useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { FormButton } from "../../@ui/button";
import Dialog, { DIALOG_TRANSITION_DURATION } from "../../@ui/dialog";
import {
  Note,
  UpdateNoteMutationVariables,
  useNoteLazyQuery,
  useUpdateNoteMutation,
} from "../../gql/generated/graphql";

const ContentContainer = styled.div`
  /* padding: 10px; */
`;

const NoteInput = styled.textarea`
  display: block;

  resize: none;
  outline: none;
  width: 100%;
  background: none;
  border: none;
  margin-bottom: 12px;
  font-size: ${({ theme }) => theme.font.size.md};

  &:focus {
    outline: none;
  }
`;

const TitleInput = styled.input`
  display: block;

  width: 100%;
  background: none;
  border: none;
  margin-bottom: 12px;
  font-size: ${({ theme }) => theme.font.size.md};
  font-weight: ${({ theme }) => theme.font.weight.bold};

  &:focus {
    outline: none;
  }
`;

const NoteContent = React.forwardRef<HTMLButtonElement, { note: Note }>(
  ({ note }, ref) => {
    const [updateNote] = useUpdateNoteMutation();

    const { register, handleSubmit } = useForm<UpdateNoteMutationVariables>({
      defaultValues: {
        id: note.id,
        title: note.title,
        body: note.body,
      },
    });

    const onSubmit: SubmitHandler<UpdateNoteMutationVariables> = (v) => {
      updateNote({
        variables: v,
      });
    };

    return (
      <ContentContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TitleInput placeholder="Note Title" {...register("title")} />
          <NoteInput placeholder="Note..." rows={10} {...register("body")} />
          <button type="submit" ref={ref} hidden={true}></button>
        </form>
      </ContentContainer>
    );
  }
);

const NotePage = () => {
  let navigate = useNavigate();

  let { id } = useParams<"id">();

  const [openDialog, setOpenDialog] = useState(false);

  const [queryNote, { data, loading }] = useNoteLazyQuery();

  const submitButtonRef = useRef<HTMLButtonElement>(null);

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
    submitButtonRef.current?.click();
    setTimeout(() => {
      navigate(-1);
    }, DIALOG_TRANSITION_DURATION);
  }

  return (
    <Dialog aria-labelledby="label" close={closeDialog} open={openDialog}>
      {loading && <span>loading...</span>}
      {data?.note && <NoteContent ref={submitButtonRef} note={data.note} />}
    </Dialog>
  );
};

export default NotePage;
