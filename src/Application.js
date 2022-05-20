import React from "react"
import { connect } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./Pages/HomePage";
import CategoryPage from "./Pages/CategoryPage";
import ManagePage from "./Pages/ManagePage";
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from "@mui/material"

const Application = (props) => {
    return (
        <>
            <CssBaseline />
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

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Application);