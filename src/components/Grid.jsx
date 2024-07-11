import React from 'react';
import Grid from '@mui/material/Grid';

const CustomGrid = ({ children, ...props }) => {
  return <Grid {...props}>{children}</Grid>;
};

export default CustomGrid;
