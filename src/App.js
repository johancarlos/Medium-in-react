import React, { Component } from "react";
import Navegation from "./components/Navegation.js";
import ListPublication from "./components/ListPublication.js";
import Footer from "./components/Footer.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import StoryPage from "./components/StoryPage";

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import muiTheme from './theme/muiTheme';



class App extends Component {
  render() {
    return (
      
      <MuiThemeProvider theme={muiTheme}>
       <Router>
        <div>
          <Navegation />
          <Route exact path="/" component={ListPublication} />
          <Route path="/stories/:id" component={StoryPage} />
          <Footer />
        </div>
      </Router>
      </MuiThemeProvider>
    );
  }
}
export default App;



