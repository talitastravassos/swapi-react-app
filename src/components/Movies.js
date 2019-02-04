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

class Movies extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };

  }

  getMovieList(movies){

    const allMovies = movies.map( movies => {
      return fetch(movies)
        .then(response => response.json())
  })

  return Promise.all(allMovies)
    
  }

  componentDidMount(){
      this.getMovieList(this.props.movieList).then(response => {
        this.setState( { movies: response }, () => console.log(this.state.movies))
      });
      
  }

  render(){
    const { classes } = this.props;
    const filmsList = this.state.movies;

    return (
      <div className={classes.root}>
        <List component="nav" subheader={<ListSubheader component="div">Movies</ListSubheader>}
          className={classes.root}>

        {
          filmsList.map(film => {
            return(
            <ListItemLink href="#simple-list">
              <ListItemText classes={{ primary: classes.listItemText }} primary={film.title} />
            </ListItemLink>
            )
          })
        }

        </List>
      </div>
    );

  }
}

Movies.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Movies);