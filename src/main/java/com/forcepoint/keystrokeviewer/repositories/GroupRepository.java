package com.forcepoint.keystrokeviewer.repositories;

import com.forcepoint.keystrokeviewer.domains.C60Group;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;

@Repository
public interface GroupRepository extends JpaRepository<C60Group, Long> {
    List<C60Group> findByLabelContaining(String label);
    List<C60Group> findByIdGroupIdIn(Set<Long> id);
}
