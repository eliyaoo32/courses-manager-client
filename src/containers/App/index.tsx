import React from 'react';
import { Grid } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import Navbar from '../Navbar';
import CoursesCatalog from '../CoursesCatalog';
import CoursePage from '../CoursePage';
import AddCourse from '../AddCourse';

function App() {
    return (
        <Grid container spacing={0}>
            <Navbar />
            
            <Grid container style={{marginTop: '10px'}}>
                <Switch>
                    <Route exact path="/">
                        <CoursesCatalog />
                    </Route>
                    <Route exact path="/course/add">
                        <AddCourse />
                    </Route>
                    <Route path="/course/:course_id">
                        <CoursePage />
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