import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import 'whatwg-fetch';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 500
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 400,
  },
  cssLabel: {
    color : 'grey',
    fontSize: 25
  },

  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: `${theme.palette.primary.main} !important`,
    }
  },

  cssFocused: {
    color: 'yellow'
  },

  resize:{
    fontSize:50
  },

  button: {
    margin: theme.spacing.unit,
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    display: 'none',
  },

});


class Search extends React.Component {
  state = {
    name: '',
    character: {}
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    }, 
    //() => console.log(this.state.name)
    );

    clearTimeout(timeout);

    var timeout = setTimeout( () => { 
      fetch(`https://swapi.co/api/people/?search=${this.state.name}`)
      .then( response => response.json() )
      .then( json => this.setState({ character: json }, ( ) => {
        //console.log("Result: ", this.state.character)
        this.props.getSearch(this.state.character)
        }))
    }, 2000)
  };

  render() {
    const { classes } = this.props;
    return (
      <form className={classes.container} noValidate autoComplete="off" >
        <TextField
          id="standard-name"
          label="Search Star Wars Character"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name').bind(this)}
          margin="normal"
          InputLabelProps={{
            classes: {
              root: classes.cssLabel,
              focused: classes.cssFocused,
            },
          }}
          InputProps={{
            classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline,
              input: classes.resize,
            },
            inputMode: "numeric"
          }}
        />
        <Button variant="contained" color="primary" className={classes.button}>
        GO
      </Button>
        </form>
    );
    
  }
}

Search.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Search);