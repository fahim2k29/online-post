import './App.css';
import { Button } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import PostDetail from './components/PostDetail/PostDetail';

function App() {
  return (  
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route> 
          <Route path="/post/:pstId">
            <PostDetail/>
          </Route> 
          <Route path="/post">
            <Home/>
          </Route> 
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>     
    
  );
}

export default App;
