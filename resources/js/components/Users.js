import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

import UsersList from './UsersList';

class Users extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
        
    }

    componentDidMount() {
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        //     .then(res => {
        //     const posts = res.data;
        //     console.log(posts.title)
        //     this.setState({ posts });
        // })

        var self = this;

        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(function (res) {
            const users = res.data;
            // console.log(posts)
            self.setState({ users });
        })
        .catch(function (error) {
            console.log(error);
        });
 
    }    

    render() {
        const users = this.state.users;
        return (
            <div className="card-body">
               <UsersList users = {users} /> 
            </div>
        );
    }
}

export default Users;



