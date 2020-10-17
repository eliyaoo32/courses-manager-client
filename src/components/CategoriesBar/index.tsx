import React from 'react';
import { Grid } from '@material-ui/core';
import CategoryTag from '../CategoryTag';
import Category from '../../types/Category';

type CategoriesBarProps = {
    categories: Array<Category>
};

function CategoriesBar({ categories }: CategoriesBarProps) {
    return (
        <Grid container justify="center" direction="row" style={{width:'100%'}} spacing={2}>
            {categories.map((category: Category) => (
                <Grid item key={category.id}>
                    <CategoryTag category={category} />
                </Grid>
            ))}
        </Grid>
    );
}

export default CategoriesBar;