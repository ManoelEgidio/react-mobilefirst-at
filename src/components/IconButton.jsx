import React from 'react';
import IconButton from '@mui/material/IconButton';

const CustomIconButton = ({ icon, onClick }) => {
  return <IconButton onClick={onClick}>{icon}</IconButton>;
};

export default CustomIconButton;
