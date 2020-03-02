import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import {
  ThemeProvider as MuiThemeProvider,
  CssBaseline
} from "@material-ui/core";
import { IntlProvider } from "react-intl";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { ThemeProvider } from "styled-components";
import MomentUtils from "@date-io/moment";
import { SnackbarProvider } from "notistack";
import config, {
  getCurrentLanguage
} from "./containers/languageSwitcher/config";
import themes from "config/themes/materialTheme";

const currentAppLocale =
  AppLocale[getCurrentLanguage(config.defaultLanguage || "english").locale];
const theme = themes["defaultTheme"];

const App = () => (
  <IntlProvider
    locale={currentAppLocale.locale}
    messages={currentAppLocale.messages}
  >
    <>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <CssBaseline />
            <Provider store={store}>
              <SnackbarProvider
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                maxSnack={2}
              >
                <div>Adinav</div>
              </SnackbarProvider>
            </Provider>
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </MuiThemeProvider>
      <TknGlobalStyle />
      <AppGlobalStyle />
    </>
  </IntlProvider>
);

export default App;
export { AppLocale };
