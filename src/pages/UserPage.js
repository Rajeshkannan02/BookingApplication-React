import React from 'react';
import User from '../components/User';

function UserPage(props) {
    return <User id={props.match.params.id} />;
}

export default UserPage;