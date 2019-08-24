//rce

import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Header from './Header/Header';
import Navigation from './Navigation';

const styles = theme => ({
    container: {
        display: 'flex',
        flexGrow: 2,
        padding: theme.spacing.unit * 2,
        backgroundColor: 'black'
    },
    card: {
        minWidth: 275,
        backgroundColor: 'white',
    },
    bullet: {
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 18,
    },
    movieName: {
        color: 'black',
    },
    pos: {
        marginBottom: 19,
        marginTop: 19,
        fontSize: 24
    },
});

export class MovieDetails extends Component {

    componentDidMount() {
        console.log(this.props.location.state.movie);

    }


    render() {
        const { classes } = this.props;

        const movie = this.props.location.state.movie;

        return (

            <div className="classes.container">
            <Navigation />
                <h1>Movie Details</h1>

                <Header />
                <Card key={movie.url} className={classes.card} >
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Movie Title
                    </Typography>
                        <Typography variant="h3" component="h3" className={classes.movieName}>
                            {movie.title}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            <strong>Episode Number: {movie.episode_id}</strong>
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            <strong>Opening:</strong> {movie.opening_crawl}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                        <strong>Director:</strong> {movie.director}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                        <strong>Producer:</strong> {movie.producer}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                        <strong>Release Date:</strong> {movie.release_date}
                        </Typography>
                    </CardContent>

                </Card>
                </div>
        )
    }
}


MovieDetails.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MovieDetails);
