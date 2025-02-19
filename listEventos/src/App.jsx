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
  const [events, setEvents] = useState([]);

  async function getEvents() {
    await api.getListagem().then(
      (response) => {
        console.log(response.data.eventos);
        setEvents(response.data.eventos);
      },
      (error) => {
        console.log(error.response.data.error);
      }
    );
  }

  const listEvents = events.map((event) => {
    return (
      <TableRow key={event.id_evento}>
        <TableCell align="center">{event.nome}</TableCell>
        <TableCell align="center">{event.descricao}</TableCell>
        <TableCell align="center">{event.data_hora}</TableCell>
        <TableCell align="center">{event.local}</TableCell>
      </TableRow>
    );
  });

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div>
      <h3>Lista de Eventos:</h3>
      <TableContainer component={Paper} style={{ margin: "2px" }}>
        <Table size="small">
          <TableHead
            style={{
              backgroundColor: "#BECC41",
              borderStyle: "solid",
              borderColor: "#020202",
            }}
          >
            <TableRow>
              <TableCell align="center">Nome</TableCell>
              <TableCell align="center">Descrição</TableCell>
              <TableCell align="center">Data e Hora</TableCell>
              <TableCell align="center">Local</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{listEvents}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App
