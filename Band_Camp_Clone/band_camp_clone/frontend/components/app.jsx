import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import SplashContainer from './splash/splash_container';
import WelcomePageContainer from './welcome/welcome_page_container';
import ArtistShowContainer from './artists/artist_show_container';
import AlbumShowContainer from './albums/album_show_container';
import Modal from './modals/signup_modal';
import { Redirect } from 'react-router';

const App =  () => {
 
 return(
<div className="outer-body">
  <Modal />
  <header className="nav-bar">
      <WelcomePageContainer />
      {/* <Banner /> */}
  </header>
  <main>
    <Switch>
        <Route exact path='/' component={SplashContainer} />
        <AuthRoute exact path='/signup' component={SignupContainer} />
        <AuthRoute exact path='/login' component={LoginContainer} />
        <Route exact path='/artists/:id' component={ArtistShowContainer} />
        <Route exact path='/artists/:artistId/albums/:id' component={AlbumShowContainer} />
        <Route path='/' render={() => (
          <Redirect to="/" /> 
          )} />
    </Switch>
  </main>
</div>
 
)};

export default App;
  

     
  