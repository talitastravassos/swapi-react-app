import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import yellow from '@material-ui/core/colors/yellow';
import { Link } from "react-router-dom";

const styles = {
  root: {
    flexGrow: 1,
  },
  color:{
    color: yellow[500],
    backgroundColor: 'black',
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
};

function Navigation(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" style={styles.color}>
        <Toolbar>
          <Typography variant="h4" color="inherit" className={classes.grow}>
          </Typography>
          <Button color="inherit" to={'/'} component={Link}>Home</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigation);
