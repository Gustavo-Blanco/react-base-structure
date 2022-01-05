import React from "react";
import { Box, TextField, Button } from "@mui/material";
import { useForm } from "../../../hooks/useForm";
import userRequest from '../../../services/userReq'
const UserForm = ({initialState, handleToggleDialog, loadUsers}) => {
  
  const { handleInputChange, values } = useForm(initialState);
  const { name, email, password } = values;

  const uploadUser = async () => {
    if (values.id) {
      await userRequest.update(values.id,values);
    }else{
      await userRequest.store(values);
    }
    
    handleToggleDialog();
    loadUsers();
  }
  
  return (
    <Box component="form" sx={{ width: 300 }}>
      <div>
        <TextField
          id="name"
          label="name"
          variant="standard"
          name="name"
          onChange={handleInputChange}
          margin="dense"
          fullWidth
          autoComplete="false"
          value={name}
        />
      </div>
      <div>
        <TextField
          id="email"
          label="email"
          variant="standard"
          name="email"
          onChange={handleInputChange}
          margin="dense"
          fullWidth
          type="email"
          autoComplete="false"
          value={email}
        />
      </div>
      <div>
        <TextField
          id="password"
          label="password"
          variant="standard"
          name="password"
          onChange={handleInputChange}
          margin="dense"
          fullWidth
          type="password"
          autoComplete="false"
          value={password}
        />
      </div>
      <Box sx={{ mt: 3 }}>
        <Button
          variant="outlined"
          color="error"
          size="small"
          onClick={handleToggleDialog}
          sx={{ mr: 2 }}>
          Close
        </Button>
        <Button
          variant="outlined"
          size="small"
          onClick={uploadUser}
          color={values.id ? 'success' : 'primary'}
          >
          {values.id ? 'Update' : 'Submit'}
        </Button>
      </Box>
    </Box>
  );
};

export default UserForm;