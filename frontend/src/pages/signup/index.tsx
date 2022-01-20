import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FormButton } from "../../@ui/button";
import Dialog, { DIALOG_TRANSITION_DURATION } from "../../@ui/dialog";
import { DialogHeader } from "../../@ui/dialog/dialogHeader";
import { Input } from "../../@ui/input";

const SignUpPage: React.FC = () => {
  let navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    setOpenDialog(true);
  }, []);

  function closeDialog() {
    setOpenDialog(false);
    setTimeout(() => {
      navigate(-1);
    }, DIALOG_TRANSITION_DURATION);
  }

  const onSubmit = (d: any) => console.log(d);

  return (
    <Dialog aria-labelledby="label" close={closeDialog} open={openDialog}>
      <DialogHeader close={closeDialog}>Sign Up</DialogHeader>
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

export default SignUpPage;
