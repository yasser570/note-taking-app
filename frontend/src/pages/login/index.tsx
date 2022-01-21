import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FormButton } from "../../@ui/button";
import Dialog, { DIALOG_TRANSITION_DURATION } from "../../@ui/dialog";
import { DialogHeader } from "../../@ui/dialog/dialogHeader";
import { Input } from "../../@ui/input";
import {
  LoginMutationVariables,
  useLoginMutation,
} from "../../gql/generated/graphql";

const LoginPage: React.FC = () => {
  let navigate = useNavigate();

  const [openDialog, setOpenDialog] = useState(false);

  const { register, handleSubmit } = useForm<LoginMutationVariables>();

  const [login] = useLoginMutation();

  useEffect(() => {
    setOpenDialog(true);
  }, []);

  function closeDialog() {
    setOpenDialog(false);
    setTimeout(() => {
      navigate(-1);
    }, DIALOG_TRANSITION_DURATION);
  }

  const onSubmit: SubmitHandler<LoginMutationVariables> = (variables) => {
    console.log("variables", variables);

    login({
      variables,
    })
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Dialog aria-labelledby="label" close={closeDialog} open={openDialog}>
      <DialogHeader close={closeDialog}>login</DialogHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder="Username" register={register} name="username" />
        <Input
          placeholder="Password"
          register={register}
          name="password"
          type="password"
        />
        <FormButton>Submit</FormButton>
      </form>
    </Dialog>
  );
};

export default LoginPage;
