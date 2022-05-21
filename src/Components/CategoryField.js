
import React, { useState } from 'react';
import _ from "underscore"
import { connect } from "react-redux";
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import CloseIcon from '@mui/icons-material/Close';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}));

const CategoryField = (props) => {

    const [fieldAttributes, setFieldAttributes] = useState(props.field)

    const handleChange = (event) => {
        setFieldAttributes(prevState => {
            const newState = {
                ...prevState,
                [event.target.name]: event.target.value
            }
            props.updateField(props.index, newState)
            return newState
        })
    }

    const handleDelete = () => {
        props.removeField(props.index);
    }

    return (
        <>
            <FormControl sx={{ m: 1 }} variant="standard">
                <InputLabel htmlFor="demo-customized-textbox">Label</InputLabel>
                <BootstrapInput
                    id="demo-customized-textbox"
                    name='label'
                    value={fieldAttributes.label}
                    onChange={handleChange}
                />
            </FormControl>
            <FormControl sx={{ m: 1 }} variant="standard">
                <InputLabel id="demo-customized-select-label">Type</InputLabel>
                <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    name="type"
                    value={fieldAttributes.type}
                    onChange={handleChange}
                    input={<BootstrapInput />}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={0}>Text</MenuItem>
                    <MenuItem value={1}>Date</MenuItem>
                    <MenuItem value={2}>Number</MenuItem>
                </Select>
                <IconButton
                    aria-label="Delete Forever"
                    component="span"
                    onClick={handleDelete}
                >
                    <CloseIcon />
                </IconButton>
            </FormControl>

        </>
    )
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, {

})(CategoryField);