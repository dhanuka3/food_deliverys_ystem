package com.ead.payment_microservice.repository;



import com.ead.payment_microservice.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PaymentRepository extends JpaRepository<Payment, Long> {

    // Example custom method to find a payment by name
    Optional<Payment> findByName(String name);
}

