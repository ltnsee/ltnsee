import React from 'react';
import {Link} from 'react-router-dom';

import LUtil from 'util/ltns.js';
import Statistic from 'service/statistic-service.js';

const ltns = new LUtil();
const statistic = new Statistic();

import PageTitle from 'component/page-title/index.js'
import './index.css'

class Home extends React.Component{
    constructor(...args){
        super(...args);
        this.state = {
            userCount: '-',
            productCount: '-',
            orderCount: '-'
        }
    }

    loadCount(){
        statistic.getHomeCount().then(res => {
            this.setState(res);
        }, err => {
            ltns.errorTips(err)
        })
    }

    componentDidMount(){
        this.loadCount();
    }

    render(){

        return (
            <div id="page-wrapper">
                <PageTitle title="首页" />
                <div className="row">
                    <div className="col-md-4">
                        <Link to="/user" className="color-box brown">
                            <p className="count">{this.state.userCount}</p>
                            <p className="desc">
                                <i className="fa fa-user-o"></i>
                                <span>用户总数</span>
                            </p>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="/product" className="color-box green">
                            <p className="count">{this.state.productCount}</p>
                            <p className="desc">
                                <i className="fa fa-list"></i>
                                <span>商品总数</span>
                            </p>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="/order" className="color-box blue">
                            <p className="count">{this.state.orderCount}</p>
                            <p className="desc">
                                <i className="fa fa-check-square-o"></i>
                                <span>订单总数</span>
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;