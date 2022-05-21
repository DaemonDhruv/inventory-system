import * as React from "react"
import { connect } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./Pages/HomePage";
import CategoryPage from "./Pages/CategoryPage";
import ManagePage from "./Pages/ManagePage";
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from "@mui/material"
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';

import _ from "underscore"

const Application = (props) => {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <CssBaseline />
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            {
                                !_.isEmpty(props.categories) &&
                                Object.keys(props.categories).map(id => {
                                    if (props.categories[id].shouldBeListed) {
                                        return <Tab label={props.categories[id].categoryName} value={id} />
                                    }
                                })
                            }
                            <Tab label="Manage" value="manage" />
                        </TabList>
                    </Box>
                </TabContext>
            </Box>
            <Container maxWidth="lg">
                <Router>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/category/:id" element={<CategoryPage />} />
                        <Route path="/manage" element={<ManagePage />} />
                    </Routes>
                </Router>
            </Container>
        </>
    )
}

const mapStateToProps = (state) => ({
    categories: state.manage.categories
});

export default connect(mapStateToProps, {})(Application);