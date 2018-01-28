import React from 'react';
import {Route,IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import BeerPage from './components/beer/BeerPage';
import ManageBeerPage from './components/beer/ManageBeerPage';

export default(
    <Route path="/" component = {App}>
        <IndexRoute component= {HomePage}/>
        <Route path="courses" component= {CoursesPage}/>
        <Route path="about" component={AboutPage}/>
        <Route path="beers" component={BeerPage}/>
        <Route path="beer/:id" component={ManageBeerPage}/>
    </Route>
);
