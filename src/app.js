import React from 'react';
import ReactDOM from 'react-dom';

import 'font-awesome/css/font-awesome.min.css';

import './style/index.css';
import './style/index.scss';

class HelloMessage extends React.Component {
    render() {
      return (
        <div>
          <i className="fa-address-book-o"></i>
          Hello {this.props.name}
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <HelloMessage name="Taylor" />,
    document.getElementById('app')
  );