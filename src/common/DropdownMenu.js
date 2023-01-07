import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState, useMemo } from 'react';

const DropdownMenu = ({ headerInput, optionsInput }) => {
    const [headerName, setHeaderName] = useState(headerInput);

    const options = useMemo(() => [...optionsInput], []);

    const menuItems = useMemo(() =>
        options.map((option) => (
            <MenuItem value={option} key={option}>
                {option}
            </MenuItem>
        )), []
    );

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>{headerName}</InputLabel>
                <Select
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    value='DropdownMenu'
                    label='DropdownMenu'
                >
                    { menuItems }
                </Select>
            </FormControl>
            <button onClick={() => setHeaderName('OOps')}>Click me</button>
        </Box>
    );
};

export default DropdownMenu;
