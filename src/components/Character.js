import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Movies from './Movies';
import Vehicles from './Vehicles';
import Starships from './Starships';

const styles = theme => ({
    container: {
        display: 'flex',
        backgroundColor: 'black',
        flexDirection: 'row',
        alignItems: 'center'
    },
    card: {
        minWidth: 275,
        backgroundColor: 'white',

    },
    bullet: {
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 18,
        
    },
    characterName: {
        color : 'black',
    },
    pos: {
        marginBottom: 19,
        marginTop: 19,
        fontSize: 24
    },
});

class Character extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            characters: [],
            homeworld: {},
            movies: []
        };

    }

    getHomeWorld(homeworld){

    fetch(homeworld)
      .then( response => response.json() )
      .then( json => this.setState({ homeworld: json } ))

        return this.state.homeworld.name
    }

    render() {
        const { classes } = this.props;
        const character = this.props.characters;
        const movies = character.films;
        const vehicles = character.vehicles;
        const starships = character.starships;

        return (
            <div className="classes.container">
                <Card key={character.url} className={classes.card} >
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Character Name
                    </Typography>
                        <Typography variant="h2" component="h2" className={classes.characterName}>
                            {character.name}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            <strong>Height:</strong> {character.height}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            <strong>Mass: {character.mass}</strong>
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            Hair Color: {character.hair_color}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            Skin Color: {character.skin_color}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            Eye Color: {character.eye_color}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            Birth Year: {character.birth_year}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            Gender: {character.gender}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            Homeworld: { this.getHomeWorld(character.homeworld) } 
                    </Typography>
                    </CardContent>
                    <Grid container spacing={16}>
                        <Grid item xs={4}>
                            <Movies movieList={movies}/>
                        </Grid>
                        <Grid item xs={4}>
                            <Vehicles vehiclesList={vehicles}/>
                        </Grid>
                        <Grid item xs={4}>
                            <Starships starshipsList={starships}/>
                        </Grid>
                    </Grid>


                    <CardActions>
                        <Button size="small">Favorite</Button>
                    </CardActions>
                </Card>
                )
            })
           }
        </div>
        )
    }
}


Character.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Character);
