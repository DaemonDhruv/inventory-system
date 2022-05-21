import React, { useState } from 'react';
import { connect } from "react-redux";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CategoryCard from "../Components/CategoryCard";
import _ from "underscore";
import uniqid from 'uniqid';
import {
    addNewCategory,
    updateCategory
} from "../store/actions/actionManage"



const ManagePage = (props) => {
    const handleAdd = () => {
        const newCategory = {
            dateCreated: new Date(),
            categoryName: "",
            title: "",
            shouldBeListed: false,
            fields: []
        }
        props.addNewCategory(newCategory);
    }

    return (
        <>
            {
                !_.isEmpty(props.categories) &&
                Object.keys(props.categories).map(id =>
                    <CategoryCard key={id} id={id} categoryDetails={props.categories[id]} />
                )
            }
            <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
                <Button
                    sx={{ position: 'fixed', top: 16, right: 16 }}
                    variant="contained"
                    onClick={handleAdd}
                >
                    Add New Category
                </Button>
            </Box>
        </>
    )
}

const mapStateToProps = (state) => ({
    categories: state.manage.categories,
});

export default connect(mapStateToProps, {
    addNewCategory,
    updateCategory
})(ManagePage);