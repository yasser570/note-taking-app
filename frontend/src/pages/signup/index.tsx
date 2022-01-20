import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dialog, { DIALOG_TRANSITION_DURATION } from "../../@ui/dialog";
import { DialogHeader } from "../../@ui/dialog/dialogHeader";
import { Input } from "../../@ui/input";

const SignUpPage: React.FC = () => {
  let navigate = useNavigate();

  const [usernameV, setUsernameV] = useState("");

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

  return (
    <Dialog aria-labelledby="label" close={closeDialog} open={openDialog}>
      <DialogHeader close={closeDialog}>sign up</DialogHeader>
      <Input
        placeholder="username"
        value={usernameV}
        onChange={(v) => setUsernameV(v)}
      />
    </Dialog>
  );
};

export default SignUpPage;
