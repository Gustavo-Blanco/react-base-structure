import { useState } from "react";
import { Button, Dialog, DialogTitle, DialogContent } from "@mui/material";
import UserForm from "../form/index";
import { userState } from "../../../states/userState";
import EditIcon from "@mui/icons-material/Edit";

const UserDialog = ({
  action = "create",
  initialState = userState,
  loadUsers,
}) => {
  const [toggleDialog, setToggleDialog] = useState(false);
  const handleToggleDialog = () => setToggleDialog((value) => !value);
  return (
    <>
      {
        action === "create" 
        ? <Button onClick={handleToggleDialog} variant="contained" sx={{ mb: 2 }}>
            Create
          </Button> 
        : <div>
            <EditIcon
              onClick={handleToggleDialog}
              color="warning"
              sx={{
                ":hover": {
                  cursor: "pointer",
                },
              }}
            />
          </div>
      }

      <Dialog open={toggleDialog} onClose={handleToggleDialog}>
        <DialogTitle id="alert-dialog-title">Create todo</DialogTitle>
        <DialogContent>
          <UserForm
            loadUsers={loadUsers}
            initialState={initialState}
            handleToggleDialog={handleToggleDialog}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UserDialog;
