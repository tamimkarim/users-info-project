import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import './App.css';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Home from './components/Home/Home';
import NoMatch from './NoMatch/NoMatch';


function App() {

  return (
   <Router>
     <Switch>
       <Route path="/home">
          <Home></Home>  
       </Route>
      <Route path="/friend/:friendId">
      <FriendDetail></FriendDetail>
      </Route>

       <Route exact path ="/">
        <Home />
       </Route>
       <Route path="*">
        <NoMatch></NoMatch>
       </Route>


     </Switch>




   </Router>
  );
}

export default App;
