
import React, { useState } from 'react';
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
import {
    removeCategory
} from "../store/actions/actionManage"

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

const CategoryCard = ({ categoryDetails, id, removeCategory }) => {

    const [expanded, setExpanded] = useState(false);

    const handleDelete = () => {
        removeCategory(id);
    }

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            {categoryDetails.title !== "" ? categoryDetails.title.charAt(0) : "-"}
                        </Avatar>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader={new Date(categoryDetails.dateCreated).toLocaleString('en-IN', { timeZone: 'IST' })}
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
                        <Typography paragraph>Method:</Typography>
                        <Typography paragraph>
                            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                            aside for 10 minutes.
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </>
    )
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, {
    removeCategory
})(CategoryCard);