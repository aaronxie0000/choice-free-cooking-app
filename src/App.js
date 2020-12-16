
import Landing from './components/pageOne/Landing.js';
import ChooseRecipe from './components/pageTwo/ChooseRecipe.js';
import RecipeOne from './components/pageThree/RecipeOne.js';
import RecipeTwo from './components/pageThree/RecipeTwo.js';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {DayProvider} from './context/DayContext';
import { RecipeProvider } from './context/RecipeContext';

function App() {

  return (
    <DayProvider> 
      <RecipeProvider> 
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
      </RecipeProvider>
   </DayProvider>

  );
}

export default App;
