import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import WelcomePageContainer from './welcome/welcome_page_container';

const App =  () => {
 
 return(
<div>
  <h1>Band Land!</h1>
  <header>
      <WelcomePageContainer />
  </header>
  <Switch>
      <AuthRoute exact path='/signup' component={SignupContainer} />
      <AuthRoute exact path='/login' component={LoginContainer} />
  </Switch>
</div>
 
)};

export default App;
  

     
  