import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import ListPublication from "./components/Publication/ListPublication";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import StoryPage from "./components/Publication/StoryPage";

class App extends Component {
  render() {
    return (
       <Router>
        <div>
          <Navigation />
          <Route exact path="/" component={ListPublication} />
          <Route path="/stories/:id" component={StoryPage} />
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
