import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dialog, { DIALOG_TRANSITION_DURATION } from "../../@ui/dialog";
import { DialogHeader } from "../../@ui/dialog/dialogHeader";

const LoginPage: React.FC = () => {
  let navigate = useNavigate();

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
      <DialogHeader close={closeDialog}>login</DialogHeader>
    </Dialog>
  );
};

export default LoginPage;
