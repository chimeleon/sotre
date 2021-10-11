package com.forcepoint.keystrokeviewer.repositories;

import com.forcepoint.keystrokeviewer.domains.Evidence;
import com.forcepoint.keystrokeviewer.dtoes.EvidenceRequestDTO;
import com.forcepoint.keystrokeviewer.dtoes.EvidenceResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.List;

//@Repository
public interface EvidenceJdbcRepository {
//    @Autowired
//    private DataSource datasource;
    // policy, group, category 조건이 있는 경우
    // 해당 테이블에서 조건을 우선 검색한다.
    // policy, group, category 조건이 없는 경우
    //
    Page<EvidenceResponseDTO> findEvidenceByCondition(Pageable pageable, Integer channel, EvidenceRequestDTO condition);
    List<EvidenceResponseDTO> findEvidenceByConditionForExcel(Pageable pageable,Integer channel, EvidenceRequestDTO condition);
}
