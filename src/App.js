
import Landing from './components/pageOne/Landing.js';
import ChooseRecipe from './components/pageTwo/ChooseRecipe.js';
import RecipeOne from './components/pageThree/RecipeOne.js';
import RecipeTwo from './components/pageThree/RecipeTwo.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Landing}></Route>
          <Route path='/recipes' exact component={ChooseRecipe}></Route>
          <Route path='/recipes/one' exact component={RecipeOne}></Route>
          <Route path='/recipes/two' exact component={RecipeTwo}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
