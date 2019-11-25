import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/navbar';
import Dashboard from './components/dashboard/dashboard';
import MovementDetails from './components/movements/movementDetails';
import SignIn from './components/auth/signIn';
import SignUp from './components/auth/signUp';
import MovementForm from './components/movements/movementForm';
import CategoryForm from './components/categories/categoryForm';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/movement/:id" component={MovementDetails} />
          <Route path="/movements/create" component={MovementForm} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/categories/create" component={CategoryForm} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
