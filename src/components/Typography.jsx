import React from 'react';
import Typography from '@mui/material/Typography';

const CustomTypography = ({ variant, children }) => {
  return <Typography variant={variant}>{children}</Typography>;
};

export default CustomTypography;
