import React from 'react';
import { AppBar, Typography, Toolbar, IconButton, Menu, MenuItem } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import useStyles from './styles';
import { Link } from 'react-router-dom';

function Navbar() {
    const classes = useStyles();
    const [ anchorElem, setAnchorElem ] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorElem);

    const handleClose = () => setAnchorElem(null);
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorElem(event.currentTarget);

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.headerTitle}>
                    <Link to='/' className={classes.headerTitleText}>Free-Courses</Link>
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
                    <MenuItem onClick={handleClose}>
                        <Link to='/course/add' className={classes.menuItemLink}>Add Course</Link>
                    </MenuItem>
                    <MenuItem>Theme</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
}


export default Navbar;
