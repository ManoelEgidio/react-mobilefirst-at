import React from 'react';
import { Container, Typography, Box, Button, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: isSmallScreen ? '16px' : '32px',
        background: 'linear-gradient(to right, #000a3f, #000627)',
        color: '#ffffff'
      }}
    >
      <Container>
        <Typography 
          variant={isSmallScreen ? "h4" : "h2"} 
          gutterBottom
          sx={{ fontWeight: 'bold' }}
        >
          Bem-vindo ao Projeto Mobile First
        </Typography>
        <Typography 
          variant={isSmallScreen ? "body1" : "h6"} 
          gutterBottom
        >
          Este projeto demonstra a construção de uma aplicação web utilizando React e Material-UI, com foco em responsividade e design mobile first.
        </Typography>
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: isSmallScreen ? 'column' : 'row', 
            gap: 2, 
            mt: 4,
            justifyContent: 'center'
          }}
        >
          <Button 
            variant="contained" 
            color="secondary" 
            component={Link} 
            to="/form"
            sx={{
              width: isSmallScreen ? '100%' : 'auto'
            }}
          >
            Formulário
          </Button>
          <Button 
            variant="contained" 
            color="secondary" 
            component={Link} 
            to="/list"
            sx={{
              width: isSmallScreen ? '100%' : 'auto'
            }}
          >
            Lista
          </Button>
          <Button 
            variant="contained" 
            color="secondary" 
            component={Link} 
            to="/login"
            sx={{
              width: isSmallScreen ? '100%' : 'auto'
            }}
          >
            Login
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
