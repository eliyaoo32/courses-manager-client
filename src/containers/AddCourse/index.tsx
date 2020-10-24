import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import TabPanel from '../../components/TabPanel';
import Tabs from '../../components/Tabs';

const _LOADERS = [
    {
        id: '1',
        name: 'Local Loader',
        options: {
            path: 'string'
        }
    },
    {
        id: '2',
        name: 'Torrent Download',
        options: {
            path: 'string'
        }
    },
];

function AddCourse() {
    const [selectedTab, setSelectedTab] = useState<string>(_LOADERS[0].id);
    const handleTabChange = (newTab: string) => setSelectedTab(newTab);
    const tabItems = _LOADERS.map(loader => ({
        key: loader.id,
        value: loader.name
    }));

    return (
        <Grid container justify="center">
            <Grid item xs={8}>
                <Tabs handleTabChange={handleTabChange} selectedTab={selectedTab} items={tabItems} />
                {_LOADERS.map(loader => (
                    <TabPanel value={selectedTab} index={loader.id}>
                        {loader.name}
                    </TabPanel>
                ))}
            </Grid>
        </Grid>
    );
}

export default AddCourse;
