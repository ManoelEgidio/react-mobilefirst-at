import React from 'react';
import Fab from '@mui/material/Fab';

const CustomFab = ({ color, onClick, children }) => {
  return <Fab color={color} onClick={onClick}>{children}</Fab>;
};

export default CustomFab;
