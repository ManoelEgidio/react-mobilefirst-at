import React, { useState } from 'react';
import { Container, TextField, Button, Box, Typography } from '@mui/material';

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
  };

  return (
    <Container>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '70vh',
          textAlign: 'center'
        }}
        onSubmit={handleSubmit}
      >
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <TextField
          label="Email"
          name="email"
          value={loginData.email}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Senha"
          name="password"
          type="password"
          value={loginData.password}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained">
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
