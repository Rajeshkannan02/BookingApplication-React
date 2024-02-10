package com.example.booking.model;

//public class Vehicle {
//
//}
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Vehicle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String type;
    private Double pricePerKm;
    @ManyToOne
    @JoinColumn(name = "driver_id")
    private Driver driver;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public Double getPricePerKm() {
		return pricePerKm;
	}
	public void setPricePerKm(Double pricePerKm) {
		this.pricePerKm = pricePerKm;
	}
	public Driver getDriver() {
		return driver;
	}
	public void setDriver(Driver driver) {
		this.driver = driver;
	}
    
}
