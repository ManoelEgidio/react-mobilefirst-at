import React from 'react';
import Alert from '@mui/material/Alert';

const CustomAlert = ({ severity, children }) => {
  return <Alert severity={severity}>{children}</Alert>;
};

export default CustomAlert;
