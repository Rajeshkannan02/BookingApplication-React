import React from 'react';
import axios from 'axios';

class User extends React.Component {
    state = {
        user: null,
    };

    componentDidMount() {
        const { id } = this.props;
        axios.get(`/api/users/${id}`)
            .then(response => {
                this.setState({ user: response.data });
            })
            .catch(error => {
                console.error('Error fetching user: ', error);
            });
    }

    render() {
        const { user } = this.state;

        if (!user) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <h1>{user.name}</h1>
                <p>Email: {user.email}</p>
                <p>Phone Number: {user.phoneNumber}</p>
            </div>
        );
    }
}

export default User;