import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: 'white',
    fontSize: 18
  },
  listItemText: {
    fontSize: 16,
  },
});


class Vehicles extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      vehicles: []
    };

  }

  getVehiclesList(vehicles){
        
    const allVehicles = vehicles.map( vehicles => {
       return fetch(vehicles).then(response => response.json())
    })

    return Promise.all(allVehicles)
}

  componentDidMount(){
      this.getVehiclesList(this.props.vehiclesList).then(response => {
        this.setState( { vehicles: response }, () => console.log(this.state.vehicles))
      });
      
  }

  render(){
    const { classes } = this.props;
    const vehiclesList = this.state.vehicles;

    return (
      <div className={classes.root}>
        <List component="nav" subheader={<ListSubheader component="div">Vehicles</ListSubheader>}
          className={classes.root}>

        {
          vehiclesList.map(vehicle => {
            return(
              <ListItem button key={vehicle.url} component={Link} to={{
                pathname:`/vehicledetails/${vehicle.name}`, 
                state:{
                  vehicle
                  }}} >
                <ListItemText classes={{ primary: classes.listItemText }} primary={vehicle.name} />
              </ListItem>
            )
          })
        }

        </List>
      </div>
    );

  }
}

Vehicles.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Vehicles);