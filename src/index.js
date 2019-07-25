import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SwapiProvider from './context/Swapi';
import MovieDetails from './components/MovieDetails';
import { VehicleDetails } from './components/VehicleDetails';
import { StarshipDetails } from './components/StarshipDetails';

import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <SwapiProvider>
                <Route path="/" exact={true} component={App} />
                <Route path="/moviedetails/:id" component={MovieDetails} />
                <Route path="/vehicledetails/:id" component={VehicleDetails} />
                <Route path="/starshipdetails/:id" component={StarshipDetails} />
            </SwapiProvider>
        </Switch>
    </ BrowserRouter>
, document.getElementById('root'));
