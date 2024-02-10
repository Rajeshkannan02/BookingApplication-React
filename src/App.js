 import logo from './logo.svg';
 import './App.css';
// import User from './components/User';
// import Driver from './components/Driver';
// import Vehicle from './components/Vehicle';

// function App() {
//   return (
//     <div className="App">
//      <User />
//      <Driver />
//      <Vehicle />

//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserPage from './pages/UserPage';

function App() {
  return (
      <Router>
          <div className="App">
              <Route path="/users/:id" component={UserPage} />
              
          </div>
      </Router>
  );
}

export default App;
