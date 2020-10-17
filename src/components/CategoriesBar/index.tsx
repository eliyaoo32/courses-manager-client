import React from 'react';
import { Grid } from '@material-ui/core';
import CategoryTag from '../CategoryTag';

type CategoriesBarProps = {
    categories: Array<string>
};

function CategoriesBar({ categories }: CategoriesBarProps) {
    return (
        <Grid container justify="center" direction="row" style={{width:'100%'}} spacing={2}>
            {categories.map((category, index) => (
                <Grid item>
                    <CategoryTag key={index} name={category} />
                </Grid>
            ))}
        </Grid>
    );
}

export default CategoriesBar;