import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: {
      main: '#0D6EFD',
    },
    secondary: {
      main: '#fff',
      contrastText: '#0D6EFD'
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
        fullWidth: true
      }
    },
    MuiSelect: {
      defaultProps: {
        fullWidth: true
      }
    },
    MuiAutocomplete: {
      defaultProps: {
        fullWidth: true
      }
    }
  }
});

export default theme;
