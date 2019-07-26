import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import PostsPage from '../pages/PostsPage';
import CreateNewPostPage from '../pages/CreateNewPostPage';
import routes from '../configs/routes';

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path={routes.ALL_POSTS} component={PostsPage} />
          <Route path={routes.CREATE_NEW_POST} component={CreateNewPostPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}
