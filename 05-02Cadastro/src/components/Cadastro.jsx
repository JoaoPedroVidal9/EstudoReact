import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typo from "@mui/material/Typography";
import { useState } from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import api from "../axios/axios"

function Cadastro() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    cpf:"",
    data_nascimento: 0,
    name: "",

  });
  const onChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    
    cadastro();
  };

  async function cadastro() {
    await api.postCadastro(user).then(
      (response)=>{
        alert(response.data.message)
      },
      (error)=>{
        alert(error.response.data.error)
      }
    )
  }

  return (
    <Container component="main" maxWidth="xl">
      <Box
        component="div"
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{
            mt: 2,
            mb: 2,
            backgroundColor: "#964B00",
          }}
        >
          <AccountCircleOutlinedIcon />
        </Avatar>
        <Typo component="h1" variant="h5">
          Cadastre-se no Sistema Vio:
        </Typo>
        <Box
          component="form"
          width="80%"
          sx={{
            marginTop: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          onSubmit={handleSubmit}
        >
          <TextField
            sx={{
              mt: 1,
            }}
            id="email"
            label="Email"
            name="email"
            type="email"
            required
            fullWidth
            value={user.email}
            onChange={onChange}
          />
          <TextField
            sx={{
              mt: 1,
            }}
            id="password"
            label="Senha"
            name="password"
            required
            fullWidth
            type="password"
            value={user.password}
            onChange={onChange}
          />
          <TextField
            sx={{
              mt: 1,
            }}
            id="cpf"
            label="CPF"
            name="cpf"
            type="text"
            required
            fullWidth
            value={user.cpf}
            onChange={onChange}
          />
          <Typo component="p" sx={{
            alignSelf: "start"
          }}>Data de Nascimento:</Typo>
          <TextField
            sx={{
              mt: 1,
            }}
            id="data_nascimento"
            name="data_nascimento"
            required
            fullWidth
            type="date"
            value={user.data_nascimento}
            onChange={onChange}
          />

          <TextField
            sx={{
              mt: 1,
            }}
            id="name"
            label="Nome"
            name="name"
            type="text"
            required
            fullWidth
            value={user.name}
            onChange={onChange}
          />

          <Button
            sx={{
              mt: 2,
              mb: 2,
              backgroundColor: "#964B00",
            }}
            fullWidth
            type="submit"
            variant="contained"
          >
            Cadastrar
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Cadastro;
