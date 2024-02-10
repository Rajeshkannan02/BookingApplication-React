package com.example.booking.Repository;
import com.example.booking.model.Vehicle;

//public interface VehicleRepository {
//
//}

import org.springframework.data.jpa.repository.JpaRepository;

public interface VehicleRepository extends JpaRepository<Vehicle, Long> {
    List<Vehicle> findByType(String type);
    Vehicle findByIdAndDriverId(Long id, Long driverId);
}