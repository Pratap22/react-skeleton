import { createMuiTheme } from "@material-ui/core/styles"

const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      light: "#18b6c0",
      main: "#1abec5",
      dark: "#007696",
      contrastText: "#fff",
    },
    background: {
      default: "#f6f9fc",
    },
  },
  typography: {
    fontFamily: '"Helvetica Neue"',
    button: {
      textTransform: "none",
    },
  },
})

const themes = {
  defaultTheme,
}

export default themes
