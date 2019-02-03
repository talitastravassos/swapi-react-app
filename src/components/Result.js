import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  container: {
    display: 'flex',
    flexGrow: 1,
    padding: theme.spacing.unit * 4,
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

    this.getCount = () => this.setState( {count: true} )
  }

   componentDidUpdate(prevProps, prevState, snapshot){
    //if(this.props.results.count >= 1){
      //this.getCount();
    //}
    
    console.log('componentDidUpdate')
    console.log(this.props.results['results'][0].name)
   }


  // componentDidMount(){
  //   //var name = 'luke'
  //   fetch(`https://swapi.co/api/people/?search=${this.props.setSearch}`)
  //   .then( response => response.json() )
  //   .then( json => this.setState({ characters: json }, ( ) => console.log("Result: ", this.state.characters) ) )
  // }

  render() {
    const { classes } = this.props;
    
    return (
      <div className={classes.container}>
        <Grid container spacing={24}>
          <Grid item xs={6}>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Character Name
        </Typography>
                <Typography variant="h4" component="h2">
                  Luke
        </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  <strong>Height:</strong> {172}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  <strong>Mass: {77}</strong>
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  Hair Color: Blond
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  Skin Color: Fair
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  Eye Color: Blue
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  Birth Year: 19BBY
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  Gender: Male
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  HomeWorld: 19BBY
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
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