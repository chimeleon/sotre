package com.forcepoint.keystrokeviewer.repositories;

import com.forcepoint.keystrokeviewer.domains.CategoryList;
import com.forcepoint.keystrokeviewer.domains.TriggerList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;

@Repository
public interface TriggerListRepository extends JpaRepository<TriggerList, Long> {
    List<TriggerList> findByIdListContaining(String idList);
    List<TriggerList> findByTriggerListIdIn(Set<Long> idList);
}
