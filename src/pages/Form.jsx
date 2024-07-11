import React, { useState } from 'react';
import { Container, TextField, Button, Box, Typography } from '@mui/material';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
          Formulário
        </Typography>
        <TextField
          label="Nome"
          name="name"
          value={formData.name}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Senha"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Telefone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained">
          Enviar
        </Button>
      </Box>
    </Container>
  );
};

export default Form;
