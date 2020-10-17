import React from 'react';
import { Grid } from '@material-ui/core';
import Category from '../../types/Category';
import CourseCard from '../../components/CourseCard';
import CategoriesBar from '../../components/CategoriesBar';

const _categories: Array<Category> = [
    {
        id: 1,
        name: 'E-Commerce'
    },
    {
        id: 2,
        name: 'Marketing'
    },
    {
        id: 3,
        name: 'Design'
    }
]

function CoursesCatalog() {
    return (
        <React.Fragment>
            <CategoriesBar categories={_categories} />

            <Grid container justify="center" style={{marginTop: '30px'}}>
                <Grid item xs={11} md={4}>
                    <CourseCard
                        categories={[_categories[0], _categories[1]]}
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