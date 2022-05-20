import React from "react"
import { connect } from "react-redux";

const HomePage = (props) => {
    return (
        <>
            <p>HomePage</p>
        </>
    )
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, {})(HomePage);