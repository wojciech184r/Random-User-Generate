import React from 'react';

const ButtonFetchUsers = (props) => {
    return ( 
        <button style={{
            padding: '10px 20px ',
            backgroundColor: 'white',
            margin: '20px'
        }} onClick={props.click}>Show 5 Users</button>
       
     );
}
 
export default ButtonFetchUsers;