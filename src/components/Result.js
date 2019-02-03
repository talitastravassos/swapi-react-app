import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';


import Character from './Character';


const styles = theme => ({
  container: {
    display: 'flex',
    flexGrow: 2,
    padding: theme.spacing.unit * 2,
    backgroundColor: 'black'
  },
  card: {
    minWidth: 275,
    backgroundColor: 'grey',

  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 18,
  },
  pos: {
    marginBottom: 19,
    marginTop: 19,
    fontSize: 16
  },
});

class Result extends React.Component {
  
  constructor(props){
    super(props)
    
    this.state = {
      characters: {},
      count: false
    };

    this.updateCharacter = () => this.setState( {characters: this.props.results} )
    this.getCount = () => this.setState( {count: true} )
  }

   componentDidUpdate(prevProps, prevState, snapshot){
    //if(this.props.results.count >= 1){
      //this.getCount();
    //}

    
    //console.log('componentDidUpdate')
    //console.log(this.props.results)
   }


  // componentDidMount(){
  //   //var name = 'luke'
  //   fetch(`https://swapi.co/api/people/?search=${this.props.setSearch}`)
  //   .then( response => response.json() )
  //   .then( json => this.setState({ characters: json }, ( ) => console.log("Result: ", this.state.characters) ) )
  // }

  render() {
    const { classes } = this.props;
    const characters = this.props.results.results;
    console.log("result ccomponent", characters)
    
    return (
      <div className={classes.container}>
        <Grid container spacing={24}>
          <Grid item xs={4}>
          {
            characters.map( c => {
              return (
                <Character characters={c}/>
              )
            })
          }
          </Grid>
        </Grid>
      </div>
    )
  }
}

Result.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Result);