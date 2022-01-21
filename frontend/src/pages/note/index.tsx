import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Dialog, { DIALOG_TRANSITION_DURATION } from "../../@ui/dialog";
import { useNoteLazyQuery } from "../../gql/generated/graphql";

export type NoteT = {
  id: string;
  title: string;
  body: string;
};

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
      {loading && <span>loading</span>}
      {data && JSON.stringify(data)}
    </Dialog>
  );
};

export default NotePage;
