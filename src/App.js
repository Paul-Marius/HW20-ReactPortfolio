import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import "./App.css";

// export class App extends Component {

//   render() {
//     return (
//       <Router>
//         <Switch>
//           <Route exact path="/about" component={About} />
//           <Route exact path="/portfolio" component={Portfolio} />
//           <Route exact path="/contact" component={Contact} />
//         </Switch>
//       </Router>
//     )
//   }
// }

// export default App;



function App() {
  return (

    <Router basename={process.env.PUBLIC_URL}>

      <Navbar/>
      <Switch>

        <Route exact path="/" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
      </Switch>

      {/* <Footer /> */}
    </Router>
  );
}


export default App;