import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

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


class Character extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            characters: []
        };


    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //this.state.characters.map( character => {console.log(character)})
    }

    componentWillReceiveProps() { //this is called to before render method
        //this.setState({
        // characters: this.props.characters.results
        //}, console.log(this.state.characters))
    }

    render() {
        const { classes } = this.props;
        const character = this.props.characters;
        return (
            <div className="classes.container">
                <Card key={character.url} className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Character Name
                    </Typography>
                        <Typography variant="h4" component="h2">
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
                            HomeWorld: 19BBY
                    </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
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
