import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';

// import 'font-awesome/css/font-awesome.min.css';

// import './style/index.css';
// import './style/index.scss';
import Layout from 'component/layout/index.js';
import Home from 'page/home/index.js';
import Login from 'page/login/index.js';


class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Login} />
          <Route path="/login" render={props => (
            <Layout>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/product" component={Home} />
                <Route exact path="/product-category" component={Home} />
              </Switch>
            </Layout>
          )} />
        </Switch>

      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);