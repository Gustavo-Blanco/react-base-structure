import { Container } from "@mui/material";
import { useEffect, useState } from "react";
// import { UserDialog } from '../../components/user/dialog'
// import { UserForm } from '../../components/user/form'
// import { UserList } from '../../components/user/list'
import { UserDialog, UserList } from "../../components/user/index";
import userRequest from "../../services/userReq";

export const UserIndex = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const users = await userRequest.all();
    setUsers(users.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <>
      <Container sx={{ mt: 8 }}>
        <UserDialog loadUsers={loadUsers} />
        <UserList users={users} loadUsers={loadUsers}/>
      </Container>
    </>
  );
};
