import React from 'react';

import NavTop from 'component/nav-top/index.js';
import NavSide from 'component/nav-side/index.js';
import './theme.css'

class Layout extends React.Component{
    constructor(...args){
        super(...args);
    }
    render(){

        return (
            <div id="wrapper">
                <NavTop {...this.props}/>
                <NavSide />
                {this.props.children}
            </div>
        );
    }
}

export default Layout;