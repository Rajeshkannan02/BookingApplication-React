package com.example.booking.Repository;
import com.example.booking.model.User;
//public interface UserRepository {
//
//}
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}