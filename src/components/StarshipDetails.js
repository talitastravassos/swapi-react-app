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
        backgroundColor: 'black',
        flexDirection: 'row',
        alignItems: 'center'
    },
    card: {
        minWidth: 375,
        backgroundColor: 'white',

    },
    bullet: {
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 18,

    },
    starshipName: {
        color: 'black',
    },
    pos: {
        marginBottom: 19,
        marginTop: 19,
        fontSize: 24
    },
});

export class StarshipDetails extends Component {

    componentDidMount() {
        console.log(this.props.location.state.starship);

    }

    render() {
        const starship = this.props.location.state.starship;

        return (
            <div>
                <Navigation />
                <h1>Starship Details</h1>

                <Header />

                <Card className={this.props.card} >
                    <CardContent>
                        <Typography className={this.props.title} variant="h4" component="h4" color="textSecondary" gutterBottom>
                        Starship Title
                    </Typography>
                        <Typography variant="h3" component="h3" className={this.props.starshipName}>
                            {starship.name}
                        </Typography>
                        <Typography className={this.props.pos} variant="h5" component="h5" color="textSecondary">
                            <strong>Model:</strong> {starship.model}
                        </Typography>
                        <Typography className={this.props.pos} variant="h5" component="h5" color="textSecondary">
                            <strong>Manufacturer:</strong> {starship.manufacturer}
                        </Typography>
                        <Typography className={this.props.pos} variant="h5" component="h5" color="textSecondary">
                            <strong>Length:</strong> {starship.length}
                        </Typography>
                        <Typography className={this.props.pos} variant="h5" component="h5" color="textSecondary">
                        <strong>Max Atmosphering Speed:</strong> {starship.max_atmosphering_speed}
                        </Typography>
                        <Typography className={this.props.pos} variant="h5" component="h5" color="textSecondary">
                        <strong>Crew:</strong> {starship.crew}
                        </Typography>
                        <Typography className={this.props.pos} variant="h5" component="h5" color="textSecondary">
                        <strong>Passengers:</strong> {starship.passengers}
                        </Typography>
                        <Typography className={this.props.pos} variant="h5" component="h5" color="textSecondary">
                        <strong>Cargo Capacity:</strong> {starship.cargo_capacity}
                        </Typography>
                        <Typography className={this.props.pos} variant="h5" component="h5" color="textSecondary">
                        <strong>Consumables:</strong> {starship.consumables}
                        </Typography>
                        <Typography className={this.props.pos} variant="h5" component="h5" color="textSecondary">
                        <strong>Hyperdrive Rating:</strong> {starship.hyperdrive_rating}
                        </Typography>
                        <Typography className={this.props.pos} variant="h5" component="h5" color="textSecondary">
                        <strong>MGLT:</strong> {starship.MGLT}
                        </Typography>
                        <Typography className={this.props.pos} variant="h5" component="h5" color="textSecondary">
                        <strong>Starship Class:</strong> {starship.starship_class}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        )
    }
}


StarshipDetails.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StarshipDetails);
