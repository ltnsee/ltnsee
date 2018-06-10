import React from 'react';
import { Link } from 'react-router-dom';
import LUtil from 'util/ltns.js';
import User from 'service/user-service.js';

const ltns = new LUtil();
const user = new User();


class NavTop extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            username: ltns.getStorage('userInfo').username || ''
        }

    }
    // 退出登录
    onLogout(e) {
        user.logout().then(res => {
            ltns.removeStorage('userInfo');
            // 当前组件的props中并没有history方法，因此必须从祖先组件中传递（也就是react-rouer-dom中的Route组件），也可以用window.location.href = '/login'，直接跳转
            this.props.history.push('/login');
        }, err => {
            ltns.errorTips(err);
        })
    }

    render() {

        return (
            <div className="navbar navbar-default top-navbar" role="navigation">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/"><b>HAPPY</b>LTNS</Link>
                </div>
                <ul className="nav navbar-top-links navbar-right">
                    <li className="dropdown">
                        <a className="dropdown-toggle" href="javascript:;">
                            <i className="fa fa-user fa-fw"></i>
                            {this.state.username ? <span>欢迎，{this.state.username}</span> : <span>欢迎您</span>}
                            <i className="fa fa-caret-down"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-user">
                            <li>
                                <a onClick={e => { this.onLogout(e) }}>
                                    <i className="fa fa-sign-out fa-fw"></i>
                                    <span>退出登录</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}

export default NavTop;