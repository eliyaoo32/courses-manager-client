import { createMuiTheme } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: blue[900]
        },
        secondary: {
            main: blue[400]
        }
    }
});

export default theme;
