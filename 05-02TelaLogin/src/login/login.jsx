import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";
import Typo from "@mui/material/Typography";
import { useState } from "react";
import api from '../axios/axios';

function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const onChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    
    
   login();
  };

  async function login(){
    await api.postLogin(user).then(
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
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{
            margin: 1,
            backgroundColor: "darkblue",
          }}
        >
          <LockOutlinedIcon />
        </Avatar>
        <Typo component="h1" variant="h5">
          Vio
        </Typo>
        <Box
          component="form"
          sx={{
            marginTop: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          onSubmit={handleSubmit}
          noValidate
        >
          <TextField
            sx={{
              mt: 1,
            }}
            id="email"
            label="Email"
            name="email"
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
          <Button
            sx={{
              mt: 2,
              mb: 2,
              backgroundColor: "darkblue",
            }}
            fullWidth
            type="submit"
            variant="contained"
          >
            Entrar
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
