package com.example.booking.Service;
import com.example.booking.Repository.VehicleRepository;
import com.example.booking.model.Vehicle;

//public class VehicleService {
//
//}
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VehicleService {
    @Autowired
    private VehicleRepository vehicleRepository;

    public Vehicle createVehicle(Vehicle vehicle) {
        return vehicleRepository.save(vehicle);
    }

    public List<Vehicle> getAllVehicles() {
        return vehicleRepository.findAll();
    }

    public List<Vehicle> getVehiclesByType(String type) {
        return vehicleRepository.findByType(type);
    }

    public Vehicle getVehicleByIdAndDriverId(Long id, Long driverId) {
        return vehicleRepository.findByIdAndDriverId(id, driverId);
    }
}
