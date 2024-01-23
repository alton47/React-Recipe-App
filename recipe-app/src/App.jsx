import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';
import RecipeForm from './components/RecipeForm';
import DeletedRecipesPage from './components/DeletedRecipesPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/recipe/:id" component={RecipeDetail} />
        <Route path="/create" component={RecipeForm} />
        <Route path="/deleted" component={DeletedRecipesPage} />
      </Switch>
    </Router>
  );
};

export default App;