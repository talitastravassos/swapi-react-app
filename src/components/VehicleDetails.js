//rce

import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Header from './Header';

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
    vehicleName: {
        color: 'black',
    },
    pos: {
        marginBottom: 19,
        marginTop: 19,
        fontSize: 234,
    },
});

export class VehicleDetails extends Component {

    componentDidMount() {
        console.log(this.props.location.state.vehicle);
    }

    render() {
        const vehicle = this.props.location.state.vehicle;

        return (
            <div>
            <Header />

                <Card className={this.props.card} >
                    <CardContent>
                        <Typography className={this.props.title} variant="h4" component="h4" color="textSecondary" gutterBottom>
                            Vehicle Name
                    </Typography>
                        <Typography variant="h2" component="h2" className={this.props.vehicleName}>
                            {vehicle.name}
                        </Typography>
                        <Typography className="{this.props.pos}" variant="h5" component="h5" color="textSecondary">
                            <strong>Model:</strong> {vehicle.model}
                        </Typography>
                        <Typography className={this.props.pos} variant="h5" component="h5" color="textSecondary">
                            <strong>Manufacturer:</strong> {vehicle.manufacturer}
                        </Typography>
                        <Typography className={this.props.pos} variant="h5" component="h5" color="textSecondary">
                            <strong>Length:</strong> {vehicle.length}
                        </Typography>
                        <Typography className={this.props.pos} variant="h5" component="h5" color="textSecondary">
                            <strong>Max Atmosphering Speed:</strong> {vehicle.max_atmosphering_speed}
                        </Typography>
                        <Typography className={this.props.pos} variant="h5" component="h5" color="textSecondary">
                            <strong>Crew:</strong> {vehicle.crew}
                        </Typography>
                        <Typography className={this.props.pos} variant="h5" component="h5" color="textSecondary">
                            <strong>Passengers:</strong> {vehicle.passengers}
                        </Typography>
                        <Typography className={this.props.pos} variant="h5" component="h5" color="textSecondary">
                            <strong>Cargo Capacity:</strong> {vehicle.cargo_capacity}
                        </Typography>
                        <Typography className={this.props.pos} variant="h5" component="h5" color="textSecondary">
                            <strong>Vehicle Class:</strong> {vehicle.vehicle_class}
                        </Typography>
                    </CardContent>
                </Card>


            </div>
        )
    }
}


VehicleDetails.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VehicleDetails);
