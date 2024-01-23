import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetailPage';
import RecipeForm from './components/RecipeForm';
import DeletedRecipesPage from './components/DeletedRecipesPage';
import recipesData from './data/recipesData';  // Import recipesData

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <HomePage recipes={recipesData} />
        </Route>
        <Route path="/recipe/:id" component={RecipeDetail} />
        <Route path="/create" component={RecipeForm} />
        <Route path="/deleted" component={DeletedRecipesPage} />
      </Switch>
    </Router>
  );
};

export default App;