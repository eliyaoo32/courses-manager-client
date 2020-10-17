import React from 'react';
import { Grid } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import Navbar from '../Navbar';
import CoursesCatalog from '../CoursesCatalog';
import Course from '../Course';

function App() {
    return (
        <Grid container spacing={0}>
            <Navbar />
            
            <Grid container style={{marginTop: '10px'}}>
                <Switch>
                    <Route exact path="/">
                        <CoursesCatalog />
                    </Route>
                    <Route path="/course/:course_id">
                        <Course />
                    </Route>
                    <Route path="*">
                        <CoursesCatalog />
                    </Route>
                </Switch>
            </Grid>
        </Grid>
    );
}

export default App;