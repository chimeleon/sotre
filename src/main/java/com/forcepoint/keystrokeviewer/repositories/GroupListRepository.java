package com.forcepoint.keystrokeviewer.repositories;

import com.forcepoint.keystrokeviewer.domains.GroupList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;

@Repository
public interface GroupListRepository extends JpaRepository<GroupList, Long> {
    List<GroupList> findByIdListContaining(String idList);
    List<GroupList> findByGroupListIdIn(Set<Long> idList);
}
