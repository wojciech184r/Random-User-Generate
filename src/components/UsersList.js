import React from 'react';
import './UsersList.css'

const UsersList = (props) => {

    const users = props.users.map(user => (
        <div key={user.login.uuid} >
            <h4>{`${user.name.title} ${user.name.last}`}</h4>
            <img src={user.picture.large} alt={user.name.last} />
            <p>{user.email}</p>
        </div>))
    return ( 
        
        <div className="users">
            {users}
        </div>
     );
}
 
export default UsersList;