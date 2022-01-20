import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Dialog, { DIALOG_TRANSITION_DURATION } from "../../@ui/dialog";

export type NoteT = {
  id: string;
  title: string;
  body: string;
};

const NotePage = () => {
  let navigate = useNavigate();

  let { id } = useParams<"id">();

  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    setOpenDialog(true);
  }, []);

  let note = {
    id: "qq77wq5wd5",
    title: "my cute note",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, similique quos! Deserunt, nemo ipsum rerum incidunt nulla provident optio temporibus?",
  };

  function closeDialog() {
    setOpenDialog(false);
    setTimeout(() => {
      navigate(-1);
    }, DIALOG_TRANSITION_DURATION);
  }

  return (
    <Dialog aria-labelledby="label" close={closeDialog} open={openDialog}>
      {JSON.stringify(note)}
    </Dialog>
  );
};

export default NotePage;
