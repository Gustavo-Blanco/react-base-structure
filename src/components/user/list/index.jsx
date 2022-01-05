import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from "@mui/material";
import { UserDialog } from "../index";
import DeleteIcon from "@mui/icons-material/Delete";
import userReq from '../../../services/userReq'
//https://stackoverflow.com/questions/64331095/how-to-add-a-button-to-every-row-in-mui-datagrid
//example with datagrid add button in every row
const UserList = ({ users, loadUsers }) => {
  const deleteUser = async (id) => {
    await userReq.remove(id)
    loadUsers();
  };
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Password</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.password}</TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex'  }}>
                    <UserDialog
                      action="update"
                      initialState={user}
                      loadUsers={loadUsers}>
                      {user.password}
                    </UserDialog>
                    <DeleteIcon
                      sx={{
                        ":hover": {
                          cursor: "pointer",
                        },
                        color: 'red'
                      }}
                      onClick={() => deleteUser(user.id)}
                    />
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UserList;
