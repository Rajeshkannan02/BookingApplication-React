import React from 'react';
import axios from 'axios';

class Driver extends React.Component {
    state = {
        driver: null,
    };

    componentDidMount() {
        const { id } = this.props.match.params;
        axios.get(`/api/drivers/${id}`)
            .then(response => {
                this.setState({ driver: response.data });
            })
            .catch(error => {
                console.error('Error fetching driver: ', error);
            });
    }

    render() {
        const { driver } = this.state;

        if (!driver) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <h1>{driver.name}</h1>
                <p>License Number: {driver.licenseNumber}</p>
                <p>Vehicle Type: {driver.vehicleType}</p>
            </div>
        );
    }
}

export default Driver;