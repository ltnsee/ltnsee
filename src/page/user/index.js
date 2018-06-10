import React from 'react';
import {Link} from 'react-router-dom';
import LUtil from 'util/ltns.js';
import User from 'service/user-service.js';

import PageTitle from 'component/page-title/index.js';
import Pagination from 'util/pagination.js';


const ltns = new LUtil();
const user = new User();

class UserList extends React.Component{
    constructor(...args){
        super(...args);
        this.state = {
            pageNum: 1
        };
    }
    componentDidMount(){
        this.loadUserList();
    }
    loadUserList(){
        user.getUserList(this.state.pageNum).then(ers => {
            this.setState(res);
        }, err => {
            ltns.errorTips(err);
        });
    }
    render(){
        return (
            <div id="page-wrapper">
                <PageTitle title="用户列表"/>
                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>ID</th>
                                    <th>ID</th>
                                    <th>ID</th>
                                    <th>ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>12131313</td>
                                    <td>12131313</td>
                                    <td>12131313</td>
                                    <td>12131313</td>
                                    <td>12131313</td>
                                </tr>
                            </tbody>  
                        </table>
                        <Pagination current={11} total={180} onChange={(pageNum) => {console.log(pageNum)}}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserList;