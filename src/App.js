
import Landing from './components/pageOne/Landing.js';
import ChooseRecipe from './components/pageTwo/ChooseRecipe.js';
import Recipe from './components/pageThree/Recipe.js';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {DayProvider} from './context/DayContext';
import { RecipeProvider } from './context/RecipeContext';

import './app_styles/app.css'

function App() {

  return (
    <DayProvider> 
      <RecipeProvider> 
        <div className="App">
          <Router>
            <Switch>
              <Route path='/' exact component={Landing}></Route>
              <Route path='/recipes' exact component={ChooseRecipe}></Route>

              {/* !!! Not exact for the following two, as using nested router */}
              <Route path='/recipes/selected' component={Recipe}></Route>
            </Switch>
          </Router>
        </div>
      </RecipeProvider>
   </DayProvider>

  );
}

export default App;
