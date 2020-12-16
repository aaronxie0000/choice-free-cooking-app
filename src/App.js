
import Landing from './components/pageOne/Landing.js';
import ChooseRecipe from './components/pageTwo/ChooseRecipe.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Landing}></Route>
          <Route path='/recipes' exact component={ChooseRecipe}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
