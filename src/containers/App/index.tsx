import React from 'react';
import { Grid } from '@material-ui/core';
import Navbar from '../Navbar';
import CoursesCatalog from '../CoursesCatalog';

function App() {
    return (
        <Grid container spacing={0}>
            <Navbar />
            
            <CoursesCatalog />
        </Grid>
    );
}

export default App;