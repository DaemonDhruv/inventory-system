import * as React from 'react';
import { connect } from "react-redux";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CategoryCard from "../Components/CategoryCard";


const ManagePage = (props) => {
    return (
        <>
            <CategoryCard />
            <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
                <Button
                    sx={{ position: 'absolute', bottom: 16, right: 16 }}
                    variant="contained"
                >
                    Add New Category
                </Button>
            </Box>
        </>
    )
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, {})(ManagePage);