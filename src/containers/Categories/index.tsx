import React from 'react';
import { Grid } from '@material-ui/core';
import CategoryTag from '../../components/CategoryTag';

function Categories() {
    return (
        <Grid container justify="center" direction="row"  style={{marginTop: '10px', width:'100%'}} spacing={2}>
            <Grid item>
                <CategoryTag name="E-Commerce" selected />
            </Grid>
            <Grid item>
                <CategoryTag name="Design" />
            </Grid>
            <Grid item>
                <CategoryTag name="Marketing" />
            </Grid>
        </Grid>
    );
}

export default Categories;