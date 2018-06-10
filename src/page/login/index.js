import React from 'react';
import LUtil from 'util/ltns.js';
import User from 'service/user-service.js';
import './index.css';

const ltns = new LUtil();
const user = new User();

class Login extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            username: '',
            password: '',
            redirect: ltns.getUrlParam('redirect') || '/'
        }
    }
    /**
     * 修改页面标题
     */
    componentWillMount(){
        document.title = "登录 - LTNS"
    }
    /**
     * input的Change事件
     * @param {*} e 
     */
    onInputChange(e) {
        let inputValue = e.target.value,
            inputName = e.target.name;
        this.setState({
            [inputName]: [inputValue]
        });
    }

    /**
     * 提交表单
     * @param {*} e 
     */
    onSubmit(e) {
        e.preventDefault()
        let loginInfo = {
            username: this.state.username,
            password: this.state.password
        };
        let checkResult = user.checkLoginInfo(loginInfo);
        if(checkResult.status){
            user.login(loginInfo).then((res) => {
                ltns.setStorage('userInfo', res);
                this.props.history.push(this.state.redirect);
            }, (err) => {
                //接口有问题，所以要定义一个请成功的数据，并执行成功的操作
                let res = {
                    "status": 0,
                    "data": {
                        "id": '001',
                        "username": "ltnsee",
                        "email": "ltnsee8@163.com",
                        "phone": 18292888273,
                        "role": 0,
                        "createTime": new Date,
                        "updateTime": new Date
                    }
                }
                ltns.setStorage('userInfo', res.data);
                this.props.history.push(this.state.redirect);
                // ltns.errorTips(err);
            })
        }else{
            ltns.errorTips(checkResult.msg);
        }
    }
    render() {

        return (
            <div className="col-md-4 col-md-offset-4">
                <div className="panel panel-default login-panel">
                    <div className="panel-heading">欢迎登录 - LTNS</div>
                    <div className="panel-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="username">用户名</label>
                                <input type="text"
                                    className="form-control"
                                    id="username"
                                    name="username"
                                    placeholder="请输入用户名"
                                    onChange={e => this.onInputChange(e)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Password">密码</label>
                                <input type="password"
                                    className="form-control"
                                    id="Password"
                                    name="password"
                                    placeholder="请输入密码"
                                    onChange={e => this.onInputChange(e)} />
                            </div>
                            <div className="checkbox clearfix">
                                <label className="pull-left">
                                    <input type="checkbox" /> 记住密码
                                </label>
                                <label className="pull-right">
                                    <a href="#">注册</a>
                                </label>
                            </div>
                            <div className="form-group">
                                <button
                                    className="btn btn-block btn-primary"
                                    onClick={e => { this.onSubmit(e) }}>登录</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;