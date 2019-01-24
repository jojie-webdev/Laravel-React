import React from 'react';

const UsersList = (props) => {
    const users = props.users;
    const usersList = users.map((user) =>
        <li  key={user.id}>
            {user.name}
        </li>
    );

    return(
        <ul>{usersList}</ul>
    )
}

export default UsersList;