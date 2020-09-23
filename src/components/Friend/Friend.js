import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const {name, username, id} = props.friend;
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
           <p>Id : <Link to={`/Friend/${id}`}>Show details of  {id}</Link></p>
        </div>
    );
};

export default Friend; 