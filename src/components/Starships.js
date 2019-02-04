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
    backgroundColor: 'white',
    fontSize: 18
  },
  listItemText: {
    fontSize: 16,
  },
});

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

class Starships extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      starships: []
    };

  }

  getStarshipsList(starships){
        
    const allStarships = starships.map( starship => {
        return fetch(starship).then(response => response.json())
    })

    return Promise.all(allStarships)
}

  componentDidMount(){
      this.getStarshipsList(this.props.starshipsList).then(response => {
        this.setState( { starships: response }, () => console.log(this.state.starships))
      });
      
  }

  render(){
    const { classes } = this.props;
    const starshipsList = this.state.starships;

    return (
      <div className={classes.root}>
        <List component="nav" subheader={<ListSubheader component="div">Starships</ListSubheader>}
          className={classes.root}>
        {
          starshipsList.map(starship => {
            return(
            <ListItemLink href="#simple-list">
              <ListItemText classes={{ primary: classes.listItemText }} primary={starship.name} />
            </ListItemLink>
            )
          })
        }

        </List>
      </div>
    );

  }
}

Starships.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Starships);