import * as React from 'react';
import Button from '@mui/material/Button';

const StandardButton = ({ btnName, btnType }) => {
    return <Button variant={btnType}>{btnName}</Button>;
};

export default StandardButton;
