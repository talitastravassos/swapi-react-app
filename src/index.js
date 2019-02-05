import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import FavoritesPage from './components/FavoritesPage';
import MovieDetails from './components/MovieDetails';
import { VehicleDetails } from './components/VehicleDetails';
import { StarshipDetails } from './components/StarshipDetails';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/favorites" component={FavoritesPage} />
            <Route path="/moviedetails/:id" component={MovieDetails} />
            <Route path="/vehicledetails/:id" component={VehicleDetails} />
            <Route path="/starshipdetails/:id" component={StarshipDetails} />
        </Switch>
    </ BrowserRouter>
, document.getElementById('root'));
