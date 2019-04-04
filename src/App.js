import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import ListPublication from "./components/Publication/ListPublication";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import StoryPage from "./components/Publication/StoryPage";

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import muiTheme from './theme/muiTheme';



class App extends Component {
  render() {
    return (

      <MuiThemeProvider theme={muiTheme}>
       <Router>
        <div>
          <Navigation />
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
