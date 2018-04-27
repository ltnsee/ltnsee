import React from 'react';

import PageTitle from 'component/page-title/index.js'

class Home extends React.Component{
    constructor(...args){
        super(...args);
    }
    render(){

        return (
            <div id="page-wrapper">
                <PageTitle title="首页">
                    <button className="btn btn-warning">test</button>
                </PageTitle>
                <div className="row">
                    <div className="col-md-12">
                        body
                    </div>
                </div>
                <button className="btn btn-default">test</button>
            </div>
        )
    }
}

export default Home;