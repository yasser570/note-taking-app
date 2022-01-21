import React, { useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import { useOnClickOutside } from "../../@hooks/useOnClickOutside";
import {
  AddNoteMutationVariables,
  useAddNoteMutation,
} from "../../gql/generated/graphql";
import { breakpoints } from "../../theme/media";

const Container = styled.div<{ $focused: boolean }>`
  margin: 0 auto;
  padding: 30px;
  width: 60%;
  margin-bottom: 50px;
  box-shadow: ${({ theme, $focused }) =>
    $focused
      ? "0 5px 20px 0px rgb(255 255 255 / 30%)"
      : "0 5px 20px 0px rgb(255 255 255 / 0%)"};
  transition: ${({ theme }) => theme.transition};
  background: ${({ theme, $focused }) =>
    $focused ? theme.colors.bg2 : theme.colors.bg};
  ${breakpoints.down("md")} {
    width: 80%;
  }
  ${breakpoints.down("sm")} {
    width: 100%;
  }
`;

const AddNoteInput = styled.textarea`
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

  &:focus {
    outline: none;
  }
`;

const AddNote: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [focused, setFocused] = useState(false);

  const { register, handleSubmit } = useForm<AddNoteMutationVariables>();

  const [addNote] = useAddNoteMutation();

  const onSubmit: SubmitHandler<AddNoteMutationVariables> = (variables) => {
    addNote({
      variables,
    })
      .then(({ data }) => console.log(data))
      .catch((err) => console.log(err));
  };

  useOnClickOutside(containerRef, () => setFocused(false));

  return (
    <Container ref={containerRef} $focused={focused}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TitleInput
          style={{
            display: focused ? "block" : "none",
          }}
          placeholder="Note Title"
          {...register("title")}
        />
        <AddNoteInput
          placeholder="Add Note..."
          onFocus={() => setFocused(true)}
          rows={focused ? 4 : 1}
          {...register("body")}
        />
        <input type="submit" />
      </form>
    </Container>
  );
};

export default AddNote;
