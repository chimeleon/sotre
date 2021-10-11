package com.forcepoint.keystrokeviewer.repositories;

import com.forcepoint.keystrokeviewer.domains.PolicyTrigger;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;

@Repository
public interface PolicyTriggerRepository extends JpaRepository<PolicyTrigger, Long> {
    List<PolicyTrigger> findByLabelContaining(String label);
    List<PolicyTrigger> findByIdTriggerIdIn(Set<Long> id);
}
