import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';

import Layout from 'component/layout/index.js';
import Home from 'page/home/index.js';
import Login from 'page/login/index.js';
import UserList from 'page/user/index.js';
import Error from 'page/error/index.js';


class App extends React.Component {

  render() {
    let LayoutRouter = (
      <Layout {...this.props}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/user" component={UserList} />
          <Route component={Error} />
        </Switch>
      </Layout>
    );
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" render={props => LayoutRouter} />
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);