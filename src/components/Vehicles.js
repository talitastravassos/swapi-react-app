import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: 'grey',
    fontSize: 18
  },
  listItemText:{
    fontSize: 18,
  },
});

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function Vehicles(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List component="nav" subheader={<ListSubheader component="div">Vehicles</ListSubheader>}
        className={classes.root}>
        <ListItem button>
          <ListItemText classes={{primary:classes.listItemText}} primary="Trash" />
        </ListItem>
        <ListItemLink href="#simple-list">
          <ListItemText classes={{primary:classes.listItemText}} primary="Spam" />
        </ListItemLink>
      </List>
    </div>
  );
}

Vehicles.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Vehicles);