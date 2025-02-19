import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import api from "./axios/axios";

function App() {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    await api.getListagem().then(
      (response) => {
        console.log(response.data.users);
        setUsers(response.data.users);
      },
      (error) => {
        console.log(error.response.data.error);
      }
    );
  }

  const listUsers = users.map((user) => {
    return (
      <TableRow key={user.id_usuario}>
        <TableCell align="center">{user.name}</TableCell>
        <TableCell align="center">{user.email}</TableCell>
        <TableCell align="center">{user.cpf}</TableCell>
        <TableCell align="center">{user.data_nascimento}</TableCell>
      </TableRow>
    );
  });

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h3>Lista de Usuários:</h3>
      <TableContainer component={Paper} style={{ margin: "2px" }}>
        <Table size="small">
          <TableHead
            style={{
              backgroundColor: "#964b00",
              borderStyle: "solid",
              borderColor: "#020202",
            }}
          >
            <TableRow>
              <TableCell align="center">Nome</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">CPF</TableCell>
              <TableCell align="center">Data de Nascimento</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{listUsers}</TableBody>
        </Table>
      </TableContainer>
      <h3></h3>
    </div>
  );
}

export default App;
