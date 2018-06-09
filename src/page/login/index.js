import React from 'react';


class Login extends React.Component{
    constructor(...args){
        super(...args);
    }
    render(){

        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <div className="panel panel-default login-panel">
                        <div className="panel-heading">欢迎登录 - LTNS</div>
                        <div className="panel-body">Panel content</div>
                    </div>

                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">Panel title</h3>
                        </div>
                        <div className="panel-body">Panel content</div>
                    </div>
                </div> 
            </div>
        );
    }
}

export default Login;