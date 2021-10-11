package com.forcepoint.keystrokeviewer.repositories;

import com.forcepoint.keystrokeviewer.domains.C60User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface C60UserRepository extends JpaRepository<C60User, Long> {
    Optional<C60User> findByUsername(String username);
}
