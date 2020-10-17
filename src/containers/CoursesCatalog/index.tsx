import React from 'react';
import { Grid } from '@material-ui/core';
import CourseCard from '../../components/CourseCard';
import CategoriesBar from '../../components/CategoriesBar';

function CoursesCatalog() {
    return (
        <React.Fragment>
            <CategoriesBar categories={["E-Commerce", "Marketing", "Design"]} />

            <Grid container justify="center" style={{marginTop: '30px'}}>
                <Grid item xs={12} md={4}>
                    <CourseCard
                        categories={["E-Commerce", "Marketing"]}
                        courseName="Facebook Digital"
                        imageUrl="https://miro.medium.com/max/934/1*UfosUyZgOE97ntxNVuBFEg.png"
                        courseDescription="Course Description"
                    /> 
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default CoursesCatalog;