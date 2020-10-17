import React from 'react';
import {
    Grid, AppBar, Typography, Toolbar, IconButton, Menu, MenuItem, Chip, Card,
    CardActionArea, CardMedia, CardContent, CardActions
} from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';

function App() {
    const [ anchorElem, setAnchorElem ] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorElem);

    const handleClose = () => setAnchorElem(null);
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorElem(event.currentTarget);

    return (
        <Grid container spacing={0}>
            {/* App Bar  */}
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={{flexGrow: 1}}>
                        Free-Courses
                    </Typography>

                    <IconButton color="inherit" onClick={handleMenu}>
                        <SettingsIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar" open={open}
                        anchorEl={anchorElem} onClose={handleClose}
                        keepMounted
                        anchorOrigin={{vertical:'top',horizontal:'right'}}
                        transformOrigin={{vertical:'top',horizontal:'right'}}
                    >
                        <MenuItem>Categories</MenuItem>
                        <MenuItem>Load Course</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>

            {/* Category Menu */}
            <Grid container justify="center" direction="row"  style={{marginTop: '10px', width:'100%'}} spacing={2}>
                <Grid item>
                    <Chip variant="outlined" color="primary" label="E-Commerce" />
                </Grid>
                <Grid item>
                    <Chip variant="default" color="primary" label="Design" />
                </Grid>
                <Grid item>
                    <Chip variant="outlined" color="primary" label="Marketing" />
                </Grid>
            </Grid>

            {/* Courses */}
            <Grid container justify="center" style={{marginTop: '30px'}}>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://miro.medium.com/max/934/1*UfosUyZgOE97ntxNVuBFEg.png"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    CourseName
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This is course description
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Chip variant="outlined" color="primary" size="small" label="E-Commerce" />
                            <Chip variant="outlined" color="primary" size="small" label="Design" />
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default App;