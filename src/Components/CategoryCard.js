
import React, { useEffect, useState } from 'react';
import _ from "underscore"
import { connect } from "react-redux";
import { styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import {
    removeCategory,
    updateCategory
} from "../store/actions/actionManage"
import CategoryField from './CategoryField';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const CategoryCard = (props) => {

    const [categoryFields, setCategoryFields] = useState({ ...props.categoryDetails })

    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        props.updateCategory(props.id, categoryFields)
    }, [categoryFields])

    const updateField = (index, data) => {
        setCategoryFields(prevState => {
            var newFields = [...prevState.fields];
            newFields[index] = data;
            return {
                ...prevState,
                fields: [...newFields]
            }
        })
    }

    const removeField = (index) => {
        var newFields = [...categoryFields.fields];
        setCategoryFields(prevState => {
            return {
                ...prevState,
                fields: [...newFields.splice(index, 1)]
            }
        })
    }

    const handleChange = (event) => {
        setCategoryFields(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    const handleDelete = () => {
        props.removeCategory(props.id);
    }

    const handleAdd = () => {
        const newField = {
            label: "",
            value: "",
            type: null,
        }
        setCategoryFields(prevState => {
            return {
                ...prevState,
                fields: [...prevState.fields, { ...newField }]
            }
        })
    }

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <>
            <br></br>
            <Card sx={{ maxWidth: 545 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            {categoryFields.categoryName !== "" ? categoryFields.categoryName.charAt(0) : "-"}
                        </Avatar>
                    }
                    title={
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            name="categoryName"
                            value={categoryFields.categoryName}
                            placeholder="Enter Category Name"
                            inputProps={{ 'aria-label': 'Enter Category Name' }}
                            onChange={handleChange}
                        />
                    }
                    subheader={new Date(categoryFields.dateCreated).toLocaleString('en-IN', { timeZone: 'IST' })}
                />
                <CardActions disableSpacing>
                    <IconButton
                        aria-label="Delete Forever"
                        component="span"
                        onClick={handleDelete}
                    >
                        <DeleteForeverIcon />
                    </IconButton>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Fields:</Typography>
                        <Button
                            variant="contained"
                            onClick={handleAdd}
                        >
                            Add Field
                        </Button>
                        <br></br>
                        {_.isEmpty(categoryFields.fields) ? <p> Add some fields </p> :
                            categoryFields.fields.map((field, index) =>
                                <CategoryField
                                    key={index}
                                    field={field}
                                    index={index}
                                    updateField={updateField}
                                    removeField={removeField}
                                />
                            )
                        }

                    </CardContent>
                </Collapse>
            </Card>
        </>
    )
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, {
    removeCategory,
    updateCategory
})(CategoryCard);