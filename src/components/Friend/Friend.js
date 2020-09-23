import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const {name, username, id} = props.friend;
    const history = useHistory();
    const handleClick = (friendId) => {
        const url =`/friend/${friendId}`;
        history.push(url);
    }

    const friendStyle = {
        border: '5px solid gray',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }

    return (
        <div style={friendStyle}>
           <h4> Name: {name}</h4>
           <p>Username: {username}</p>
          
            <button onClick={ () => handleClick(id)}>Click me</button>

        </div>
    );
};

export default Friend; 