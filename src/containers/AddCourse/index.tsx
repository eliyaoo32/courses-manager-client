import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import Tabs from '../../components/Tabs';

const _LOADERS = [
    {
        id: '1',
        name: 'LocalLoader',
        options: {
            path: 'string'
        }
    }
];

function AddCourse() {
    const [selectedTab, setSelectedTab] = useState<number>(0);
    const handleTabChange = (newTab: number) => setSelectedTab(newTab);

    return (
        <Grid container justify="center">
            <Grid item xs={8}>
                <Tabs handleTabChange={handleTabChange} selectedTab={selectedTab} />
            </Grid>
        </Grid>
    );
}

export default AddCourse;
