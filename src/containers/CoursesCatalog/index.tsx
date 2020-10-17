import React from 'react';
import { Grid } from '@material-ui/core';
import Category from '../../types/Category';
import CourseCard from '../../components/CourseCard';
import CategoriesBar from '../../components/CategoriesBar';
import Course from '../../types/Course';

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
];

const _courses: Array<Course> = [
    {
        id: 1,
        name: 'Facebook Digital',
        description: 'this is a cool course',
        imageUrl: 'https://miro.medium.com/max/934/1*UfosUyZgOE97ntxNVuBFEg.png',
        categories: [_categories[0], _categories[1]]
    },
    {
        id: 2,
        name: 'Instagram Digital',
        description: 'this is a cool course',
        imageUrl: 'https://miro.medium.com/max/934/1*UfosUyZgOE97ntxNVuBFEg.png',
        categories: [_categories[0], _categories[1]]
    },
    {
        id: 3,
        name: 'Marketing Digital Area',
        description: 'this is a cool course',
        imageUrl: 'https://miro.medium.com/max/934/1*UfosUyZgOE97ntxNVuBFEg.png',
        categories: [_categories[0], _categories[1]]
    }
];

function CoursesCatalog() {
    return (
        <React.Fragment>
            <CategoriesBar categories={_categories} />

            <Grid container justify="center" style={{marginTop: '30px', width:'100%'}} spacing={4}>
                {_courses.map((course: Course) => (
                    <Grid item xs={11} md={5} key={course.id}>
                        <CourseCard course={course} />
                    </Grid>
                ))}
            </Grid>
        </React.Fragment>
    );
}

export default CoursesCatalog;