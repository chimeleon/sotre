package com.forcepoint.keystrokeviewer.repositories;

import com.forcepoint.keystrokeviewer.domains.CategoryList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;

@Repository
public interface CategoryListRepository extends JpaRepository<CategoryList, Long> {
    List<CategoryList> findByIdListContaining(String idList);
    List<CategoryList> findByCategoryListIdIn(Set<Long> idList);
}
