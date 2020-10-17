import React from 'react';
import { Grid } from '@material-ui/core';
import Navbar from '../Navbar';
import Categories from '../Categories';
import CoursesCatalog from '../CoursesCatalog';

function App() {
    return (
        <Grid container spacing={0}>
            <Navbar />

            <Categories />
            
            <CoursesCatalog />
        </Grid>
    );
}

export default App;