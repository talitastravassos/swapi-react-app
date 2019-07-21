import React, {useContext, useEffect, useState} from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import 'whatwg-fetch';
import { SwapiContext } from '../../context/Swapi';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: "auto",
    marginRight: "auto",
    width: 250,
  },
  input:{
    color: "#fac70b"
  },
  inputLabel:{
    color: "#facf5a"
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));


const Search = () => {
  const { action:{
    getCharacter
  }} = useContext(SwapiContext)
  const classes = useStyles();
  const [search, setSearch] = useState("")

  useEffect(() => {
    getCharacter(search)
  }, [search])

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        fullWidth
        id="search"
        label="Search"
        className={classes.textField}
        InputProps={{
          className: classes.input
        }}
        InputLabelProps={{
          className: classes.inputLabel
        }}
        value={search}
        onChange={ e => setSearch(e.target.value)}
        margin="normal"
        placeholder="Search Star Wars Stuffs"
      />
    </form>
  )
}

export default Search;