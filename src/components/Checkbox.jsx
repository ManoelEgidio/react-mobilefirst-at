import React from 'react';
import Checkbox from '@mui/material/Checkbox';

const CustomCheckbox = ({ checked, onChange }) => {
  return <Checkbox checked={checked} onChange={onChange} />;
};

export default CustomCheckbox;
