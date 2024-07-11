import React from 'react';
import { Container, List, ListItem, ListItemText, Typography, Box, Button, TextField } from '@mui/material';

const items = [
  { name: 'Arroz', price: 'R$ 10,00' },
  { name: 'Feijão', price: 'R$ 8,00' },
  { name: 'Macarrão', price: 'R$ 6,00' },
  { name: 'Leite', price: 'R$ 4,00' },
  { name: 'Pão', price: 'R$ 5,00' },
  { name: 'Carne', price: 'R$ 25,00' },
  { name: 'Frutas', price: 'R$ 15,00' },
  { name: 'Legumes', price: 'R$ 12,00' }
];

const ListPage = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '16px',
        background: 'linear-gradient(to right, #000a3f, #000627)',
        color: '#ffffff'
      }}
    >
      <Container>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
          Lista de Compras
        </Typography>
        <List sx={{ width: '100%', maxWidth: '600px', bgcolor: 'transparent', borderRadius: '8px', margin: '0 auto' }}>
          {items.map((item, index) => (
            <ListItem 
              key={index} 
              sx={{ 
                backgroundColor: '#1a237e', 
                marginBottom: '8px', 
                borderRadius: '4px', 
                display: 'flex', 
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <ListItemText 
                primary={item.name} 
                secondary={<Typography sx={{ color: '#ffffff' }}>{item.price}</Typography>} 
                sx={{ color: '#ffffff', textAlign: 'left' }} 
              />
              <Button 
                variant="contained" 
                color="secondary" 
                sx={{ 
                  backgroundColor: '#d32f2f', 
                  color: '#ffffff' 
                }}
              >
                Remover
              </Button>
            </ListItem>
          ))}
        </List>
        <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <TextField 
            variant="outlined" 
            label="Nome do Produto" 
            sx={{ width: '300px', backgroundColor: '#ffffff', borderRadius: '4px' }}
          />
          <TextField 
            variant="outlined" 
            label="Preço do Produto" 
            sx={{ width: '300px', backgroundColor: '#ffffff', borderRadius: '4px' }}
          />
          <Button variant="contained" color="secondary" sx={{ width: '150px' }}>
            Adicionar Produto
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ListPage;
