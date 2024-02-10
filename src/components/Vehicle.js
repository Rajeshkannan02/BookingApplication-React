import React from 'react';
import axios from 'axios';

class Vehicle extends React.Component {
    state = {
        vehicle: null,
    };

    componentDidMount() {
        const { id } = this.props.match.params;
        axios.get(`/api/vehicles/${id}`)
            .then(response => {
                this.setState({ vehicle: response.data });
            })
            .catch(error => {
                console.error('Error fetching vehicle: ', error);
            });
    }

    render() {
        const { vehicle } = this.state;

        if (!vehicle) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <h1>{vehicle.type}</h1>
                <p>Price per km: {vehicle.pricePerKm}</p>
            </div>
        );
    }
}

export default Vehicle;