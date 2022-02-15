package com.forcepoint.keystrokeviewer.repositories;

import com.forcepoint.keystrokeviewer.domains.*;
import com.forcepoint.keystrokeviewer.dtoes.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.core.annotation.Order;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Repository;
import org.thymeleaf.util.StringUtils;

import javax.annotation.PostConstruct;
import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.stream.Collectors;

@ConditionalOnProperty(value="spring.profiles.active", havingValue = "forcepoint", matchIfMissing=true)
@Repository
@Slf4j
public class OracleEvidenceJdbcRepository implements EvidenceJdbcRepository{
    @Autowired
    private TriggerListRepository triggerListRepository;
    @Autowired
    private GroupListRepository groupListRepository;
    @Autowired
    private CategoryListRepository categoryListRepository;

    @Autowired
    private PolicyTriggerRepository policyTriggerRepository;
    @Autowired
    private GroupRepository groupRepository;
    @Autowired
    private CategoryRepository categoryRepository;

    private final String countQuery = "SELECT " +
            "/*+ NO_INDEX( e ix_evidence_appl ix_evidence_needswork ix_evidence_user_dateid ix_evidence_agent_dateid ix_evidence_status_dateid ix_evidence_channel_dateid ix_evidence_evdtype_dateid ix_evidence_activity_dateid ix_evidence_catlist_dateid ix_evidence_grplstid_dateid ix_evidence_primaryevidence ix_evidence_priority_dateid ix_evidence_trglstid_dateid ix_evidence_dateid_starttime) FIRST_ROWS(1) NO_MERGE NO_EXPAND_TABLE(e) */" +
            "COUNT(e.evidenceid) " +
            "FROM evidence e";

    private final String query = "select /*+ LEADING(E, E2) USE_NL(T, E2, C, T2, G) INDEX_DESC(E(CHANNEL, dateid)) */  --> @@@힌트추가\n" +
            "                       rownum,\n" +
            "                       e.CHANNEL,\n" +
            "                       e.EVIDENCETYPE,\n" +
            "                       e2.LABEL as Activity,\n" +
            "                       e.EVIDENCESTARTTIME,\n" +
            "                       e.EVIDENCEID,\n" +
            "                       e.MATCHTEXT,\n" +
            "                       e.APPLICATIONNAME,\n" +
            "                       e.RESOURCES ,\n" +
            "                       e.AGENTTIME ,\n" +
            "                       t.LABEL AS USERNAME,\n" +
            "                       t.SAMACCOUNTNAME AS PERSON,\n" +
            "                       a.LABEL AS AGENTLABEL,\n" +
            "                       e.CATEGORYLISTID ,\n" +
            "                       e.GROUPLISTID ,\n" +
            "                       e.TRIGGERLISTID\n" +
            "                  from EVIDENCE e \n" +
            "                  left outer join TARGETUSER t \n" +
            "                    on e.USERID = t.USERID \n" +
            "                  left outer join EVENTTYPE e2 \n" +
            "                    on e.ACTIVITY = e2.EVENTCODE \n" +
            "                  left outer join AGENTDIM a \n" +
            "                    on e.AGENTID = a.AGENTID \n" +
            "                  left outer join CATEGORYLIST c \n" +
            "                    on e.CATEGORYLISTID = c.CATEGORYLISTID \n" +
            "                  left outer join TRIGGERLIST t2 \n" +
            "                    on e.TRIGGERLISTID = t2.TRIGGERLISTID \n" +
            "                  left outer join GROUPLIST g \n" +
            "                    on e.GROUPLISTID = g.GROUPLISTID\n";
//            +
//            "                 where e.CHANNEL=9\n" +
//            "                   AND e.dateid between TO_TIMESTAMP('11-10-2021 00:00:00.000000000', 'DD-MM-YYYY HH24:MI:SS.FF') \n" +
//            "                                    and TO_TIMESTAMP('18-10-2021 23:59:59.999999000', 'DD-MM-YYYY HH24:MI:SS.FF')\n" +
//            "                   AND 1=1\n" +
//            "                 ORDER BY e.CHANNEL DESC,          --> @@@인덱스에 맞춰 ORDER BY 절 컬럼 추가\n" +
//            "                       e.dateid DESC,              --> @@@인덱스에 맞춰 ORDER BY 절 컬럼 추가\n" +
//            "                       e.EVIDENCESTARTTIME DESC ";

    @Autowired
    private DataSource dataSource;
    @Override
    public Page<EvidenceResponseDTO> findEvidenceByCondition(Pageable pageable, Integer channel, EvidenceRequestDTO condition) {

        List<EvidenceResponseDTO> content = new ArrayList<>();
        String orderString = "";
        if(pageable.getSort().isSorted()) {
            orderString = extracted(pageable);
        }

        String whereCondition = makeWhereCondition(condition);

        StringBuffer countSql = new StringBuffer();
        countSql.append(this.countQuery);
        countSql.append(String.format(" where e.CHANNEL=%d AND e.EVIDENCETYPE = 1 ",channel));
        countSql.append(String.format(" AND e.dateid between TO_TIMESTAMP('%s 00:00:00.000000000', 'DD-MM-YYYY HH24:MI:SS.FF') and TO_TIMESTAMP('%s 23:59:59.999999000', 'DD-MM-YYYY HH24:MI:SS.FF')", localeConverter(condition.getRangeFrom()), localeConverter(condition.getRangeTo())));
        countSql.append(String.format(" AND %s", whereCondition));

        StringBuffer sql = new StringBuffer();
        sql.append(this.query);
        sql.append(String.format(" where e.CHANNEL=%d ",channel));
        sql.append(String.format(" AND e.dateid between TO_TIMESTAMP('%s 00:00:00.000000000', 'DD-MM-YYYY HH24:MI:SS.FF') and TO_TIMESTAMP('%s 23:59:59.999999000', 'DD-MM-YYYY HH24:MI:SS.FF')", localeConverter(condition.getRangeFrom()), localeConverter(condition.getRangeTo())));
        sql.append(String.format(" AND %s ORDER BY e.CHANNEL DESC, e.dateid DESC, e.EVIDENCESTARTTIME DESC ", whereCondition));
//        sql.append(String.format(" AND rownum > %d", pageable.getPageSize() * pageable.getPageNumber()));
        sql.append(orderString);

        Set<Long> categoryListId = new HashSet<>();
        Set<Long> triggerListId = new HashSet<>();
        Set<Long> groupListId = new HashSet<>();
        long total = 9999999;
        try(Connection conn = dataSource.getConnection()) {
            // TODO count 쿼리 실행 및 결과 저장
//            try(PreparedStatement pstmt = conn.prepareStatement(countSql.toString())) {
//                try(ResultSet rs = pstmt.executeQuery()) {
//                    if(rs.next()) {
//                        total = rs.getLong(1);
//                    }
//                }
//            }
            log.info(String.format("select a.* from (select rownum AS rnum, q.* from (%s) q where rownum <= %d) a where rnum > %d", sql.toString(), pageable.getPageSize() * (pageable.getPageNumber()+1), pageable.getPageSize() * pageable.getPageNumber()));
            try(PreparedStatement pstmt = conn.prepareStatement(String.format("select a.* from (select rownum AS rnum, q.* from (%s) q where rownum <= %d) a where rnum > %d", sql.toString(), pageable.getPageSize() * (pageable.getPageNumber()+1), pageable.getPageSize() * pageable.getPageNumber()))) {
                try(ResultSet rs = pstmt.executeQuery()) {
                    while(rs.next()) {
                        EvidenceResponseDTO item = new EvidenceResponseDTO();

                        EventTypeDto e = new EventTypeDto();
                        e.setLabel(rs.getString("Activity"));
                        if(rs.getInt("EVIDENCETYPE") == 1) {
                            e.setEvidenceType("EVENT");
                        }
                        else {
                            e.setEvidenceType("COLLECTION");
                        }
                        item.setEventType(e);

                        item.setEvidenceId(rs.getString("EVIDENCEID"));
                        item.setChannel(rs.getInt("CHANNEL"));
                        item.setUserDim(new UserDto(rs.getString("USERNAME"), new TargetUserDto(rs.getString("PERSON"))));
                        item.setAgentDim(new AgentDto(rs.getString("AGENTLABEL")));
                        item.setApplicationName(rs.getString("APPLICATIONNAME"));
                        item.setCategoryListId(rs.getLong("CATEGORYLISTID"));
                        item.setGroupListId(rs.getLong("GROUPLISTID"));
                        item.setTriggerListid(rs.getLong("TRIGGERLISTID"));
                        item.setAgentTime(rs.getLong("AGENTTIME"));
                        item.setEvidenceStartTime(ZonedDateTime.of(rs.getTimestamp("EVIDENCESTARTTIME").toLocalDateTime(), ZoneId.of("UTC")));
                        item.setMatchText(rs.getString("MATCHTEXT"));
                        item.setResources(rs.getString("RESOURCES"));

                        categoryListId.add(item.getCategoryListId());
                        triggerListId.add(item.getTriggerListid());
                        groupListId.add(item.getGroupListId());
                        content.add(item);
                    }
                }
            }

            // category, policy, group을 검색하여 값을 넣어준다.
            List<CategoryList> catrgoryList = categoryListRepository.findByCategoryListIdIn(categoryListId);
            List<TriggerList> triggerList = triggerListRepository.findByTriggerListIdIn(triggerListId);
            List<GroupList> groupList = groupListRepository.findByGroupListIdIn(groupListId);
            Map<Long, String> categoryIdMap = catrgoryList.stream().collect(Collectors.toMap(i->i.getCategoryListId(), i->i.getIdList()));
            Map<Long, String> policyIdMap = triggerList.stream().collect(Collectors.toMap(i->i.getTriggerListId(), i->i.getIdList()));
            Map<Long, String> groupIdMap = groupList.stream().collect(Collectors.toMap(i->i.getGroupListId(), i->i.getIdList()));

            Map<Long, C60Group> groups = groupRepository.findByIdGroupIdIn(groupIdMap.values().stream().flatMap(i->Arrays.stream(i.split(","))).map(i->Long.parseLong(i)).collect(Collectors.toSet())).stream().collect(Collectors.toMap(i->i.getId().getGroupId(), i->i, (p1, p2)->p1));
            Map<Long, Category> categories = categoryRepository.findByIdCategoryIdIn(categoryIdMap.values().stream().flatMap(i->Arrays.stream(i.split(","))).map(i->Long.parseLong(i)).collect(Collectors.toSet())).stream().collect(Collectors.toMap(i->i.getId().getCategoryId(), i->i, (p1, p2)->p1));
            Map<Long, PolicyTrigger>  policies = policyTriggerRepository.findByIdTriggerIdIn(policyIdMap.values().stream().flatMap(i->Arrays.stream(i.split(","))).map(i->Long.parseLong(i)).collect(Collectors.toSet())).stream().collect(Collectors.toMap(i->i.getId().getTriggerId(), i->i, (p1, p2)->p1));;

            for(EvidenceResponseDTO item : content) {
                List<Long> categoryIds = Arrays.stream(categoryIdMap.get(item.getCategoryListId()).split(",")).map(i->Long.parseLong(i)).collect(Collectors.toList());
                List<Long> groupIds = Arrays.stream(groupIdMap.get(item.getGroupListId()).split(",")).map(i->Long.parseLong(i)).collect(Collectors.toList());
                List<Long> policyIds = Arrays.stream(policyIdMap.get(item.getTriggerListid()).split(",")).map(i->Long.parseLong(i)).collect(Collectors.toList());

                List<String> categoryLabels = new ArrayList<>();
                List<String> groupLabels = new ArrayList<>();
                List<String> policyLabels = new ArrayList<>();

                for(Long id: categoryIds) {
                    categoryLabels.add(categories.get(id).getLabel());
                }
                for(Long id: groupIds) {
                    groupLabels.add(groups.get(id).getLabel());
                }
                for(Long id: policyIds) {
                    policyLabels.add(policies.get(id).getLabel());
                }

                item.setPolicy(String.join(",", policyLabels));
                item.setGroup(String.join(",", groupLabels));
                item.setCategory(String.join(",", categoryLabels));
            }

            return new PageImpl<EvidenceResponseDTO>(content, pageable, total);
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return null;
    }


    private String localeConverter(String originDate) {
        LocalDate date = LocalDate.parse(originDate, DateTimeFormatter.ofPattern("yyyy-MM-dd"));
        return date.format(DateTimeFormatter.ofPattern("dd-MM-yyyy", Locale.ENGLISH)).toUpperCase();
    }
    @Override
    public List<EvidenceResponseDTO> findEvidenceByConditionForExcel(Pageable pageable, Integer channel, EvidenceRequestDTO condition) {
        List<EvidenceResponseDTO> content = new ArrayList<>();
        String orderString = "";
        if(pageable.getSort().isSorted()) {
            orderString = extracted(pageable);
        }

        String whereCondition = makeWhereCondition(condition);

        StringBuffer countSql = new StringBuffer();
        countSql.append(this.countQuery);
        countSql.append(String.format(" where e.CHANNEL=%d AND e.EVIDENCETYPE = 1 ",channel));
        countSql.append(String.format(" AND e.dateid between TO_TIMESTAMP('%s 00:00:00.000000000', 'DD-MM-YYYY HH24:MI:SS.FF') and TO_TIMESTAMP('%s 23:59:59.999999000', 'DD-MM-YYYY HH24:MI:SS.FF')", localeConverter(condition.getRangeFrom()), localeConverter(condition.getRangeTo())));
        countSql.append(String.format(" AND %s", whereCondition));

        StringBuffer sql = new StringBuffer();
        sql.append(this.query);
        sql.append(String.format(" where e.CHANNEL=%d ",channel));
        sql.append(String.format(" AND e.dateid between TO_TIMESTAMP('%s 00:00:00.000000000', 'DD-MM-YYYY HH24:MI:SS.FF') and TO_TIMESTAMP('%s 23:59:59.999999000', 'DD-MM-YYYY HH24:MI:SS.FF')", localeConverter(condition.getRangeFrom()), localeConverter(condition.getRangeTo())));
        sql.append(String.format(" AND %s ORDER BY e.CHANNEL DESC, e.dateid DESC, e.EVIDENCESTARTTIME DESC ", whereCondition));
        sql.append(orderString);

        Set<Long> categoryListId = new HashSet<>();
        Set<Long> triggerListId = new HashSet<>();
        Set<Long> groupListId = new HashSet<>();
        long total = 0;
        try(Connection conn = dataSource.getConnection()) {
            // TODO count 쿼리 실행 및 결과 저장
            try(PreparedStatement pstmt = conn.prepareStatement(countSql.toString())) {
                try(ResultSet rs = pstmt.executeQuery()) {
                    if(rs.next()) {
                        total = rs.getLong(1);
                    }
                }
            }
            log.info(String.format("%s", sql.toString()));
            try(PreparedStatement pstmt = conn.prepareStatement(String.format("%s", sql.toString()))) {
                try(ResultSet rs = pstmt.executeQuery()) {
                    while(rs.next()) {
                        EvidenceResponseDTO item = new EvidenceResponseDTO();

                        EventTypeDto e = new EventTypeDto();
                        e.setLabel(rs.getString("Activity"));
                        if(rs.getInt("EVIDENCETYPE") == 1) {
                            e.setEvidenceType("EVENT");
                        }
                        else {
                            e.setEvidenceType("COLLECTION");
                        }
                        item.setEventType(e);

                        item.setChannel(rs.getInt("CHANNEL"));
                        item.setUserDim(new UserDto(rs.getString("USERNAME"), new TargetUserDto(rs.getString("PERSON"))));
                        item.setAgentDim(new AgentDto(rs.getString("AGENTLABEL")));
                        item.setApplicationName(rs.getString("APPLICATIONNAME"));
                        item.setCategoryListId(rs.getLong("CATEGORYLISTID"));
                        item.setGroupListId(rs.getLong("GROUPLISTID"));
                        item.setTriggerListid(rs.getLong("TRIGGERLISTID"));
                        item.setAgentTime(rs.getLong("AGENTTIME"));
                        item.setEvidenceStartTime(ZonedDateTime.of(rs.getTimestamp("EVIDENCESTARTTIME").toLocalDateTime(), ZoneId.of("UTC")));
                        item.setMatchText(rs.getString("MATCHTEXT"));
                        item.setResources(rs.getString("RESOURCES"));

                        categoryListId.add(item.getCategoryListId());
                        triggerListId.add(item.getTriggerListid());
                        groupListId.add(item.getGroupListId());
                        content.add(item);
                    }
                }
            }

            // category, policy, group을 검색하여 값을 넣어준다.
            List<CategoryList> catrgoryList = categoryListRepository.findByCategoryListIdIn(categoryListId);
            List<TriggerList> triggerList = triggerListRepository.findByTriggerListIdIn(triggerListId);
            List<GroupList> groupList = groupListRepository.findByGroupListIdIn(groupListId);
            Map<Long, String> categoryIdMap = catrgoryList.stream().collect(Collectors.toMap(i->i.getCategoryListId(), i->i.getIdList()));
            Map<Long, String> policyIdMap = triggerList.stream().collect(Collectors.toMap(i->i.getTriggerListId(), i->i.getIdList()));
            Map<Long, String> groupIdMap = groupList.stream().collect(Collectors.toMap(i->i.getGroupListId(), i->i.getIdList()));

            Map<Long, C60Group> groups = groupRepository.findByIdGroupIdIn(groupIdMap.values().stream().flatMap(i->Arrays.stream(i.split(","))).map(i->Long.parseLong(i)).collect(Collectors.toSet())).stream().collect(Collectors.toMap(i->i.getId().getGroupId(), i->i, (p1, p2)->p1));
            Map<Long, Category> categories = categoryRepository.findByIdCategoryIdIn(categoryIdMap.values().stream().flatMap(i->Arrays.stream(i.split(","))).map(i->Long.parseLong(i)).collect(Collectors.toSet())).stream().collect(Collectors.toMap(i->i.getId().getCategoryId(), i->i, (p1, p2)->p1));
            Map<Long, PolicyTrigger>  policies = policyTriggerRepository.findByIdTriggerIdIn(policyIdMap.values().stream().flatMap(i->Arrays.stream(i.split(","))).map(i->Long.parseLong(i)).collect(Collectors.toSet())).stream().collect(Collectors.toMap(i->i.getId().getTriggerId(), i->i, (p1, p2)->p1));;

            for(EvidenceResponseDTO item : content) {
                List<Long> categoryIds = Arrays.stream(categoryIdMap.get(item.getCategoryListId()).split(",")).map(i->Long.parseLong(i)).collect(Collectors.toList());
                List<Long> groupIds = Arrays.stream(groupIdMap.get(item.getGroupListId()).split(",")).map(i->Long.parseLong(i)).collect(Collectors.toList());
                List<Long> policyIds = Arrays.stream(policyIdMap.get(item.getTriggerListid()).split(",")).map(i->Long.parseLong(i)).collect(Collectors.toList());

                List<String> categoryLabels = new ArrayList<>();
                List<String> groupLabels = new ArrayList<>();
                List<String> policyLabels = new ArrayList<>();

                for(Long id: categoryIds) {
                    categoryLabels.add(categories.get(id).getLabel());
                }
                for(Long id: groupIds) {
                    groupLabels.add(groups.get(id).getLabel());
                }
                for(Long id: policyIds) {
                    policyLabels.add(policies.get(id).getLabel());
                }

                item.setPolicy(String.join(",", policyLabels));
                item.setGroup(String.join(",", groupLabels));
                item.setCategory(String.join(",", categoryLabels));
            }

            return content;
        } catch (SQLException throwables) {
            log.error("SQLException", throwables);
            throwables.printStackTrace();
        } catch (Exception throwables) {
            log.error("Exception", throwables);
            throwables.printStackTrace();
        }
        return null;
    }

    private String makeWhereCondition(EvidenceRequestDTO condition) {
        // TODO category, policy, group 조건이 있으면 해당 조건으로 listid 를 먼저 검색한다.
        List<String> cons = new ArrayList<>();
        cons.add("1=1");
        Set<Long> groupListIds = new HashSet<>();
        Set<Long> categoryListIds = new HashSet<>();
        Set<Long> policyListIds = new HashSet<>();

        if(!StringUtils.isEmptyOrWhitespace(condition.getEvidenceType())) {
            if(condition.getEvidenceType().equalsIgnoreCase("EVENT")) {
                cons.add("e.EVIDENCETYPE = 1");
            }
            else if(condition.getEvidenceType().equalsIgnoreCase("COLLECTION")) {
                cons.add("e.EVIDENCETYPE = 2");
            }
        }

        if(!StringUtils.isEmptyOrWhitespace(condition.getCategory())) {
            Set<String> ids = categoryRepository.findByLabelContaining(condition.getGroup()).stream().map(i->i.getId().getCategoryId().toString()).collect(Collectors.toSet());
            for(String id: ids) {
                categoryListRepository.findByIdListContaining(id).forEach(i->categoryListIds.add(i.getCategoryListId()));
            }
            if(categoryListIds.size() > 0) {
                cons.add(String.format("e.CATEGORYLISTID in (%s)", String.join(",", categoryListIds.stream().map(i -> i.toString()).collect(Collectors.toSet()))));
            }
        }
        if(!StringUtils.isEmptyOrWhitespace(condition.getGroup())) {
            Set<String> ids = groupRepository.findByLabelContaining(condition.getGroup()).stream().map(i->i.getId().getGroupId().toString()).collect(Collectors.toSet());
            for(String id: ids) {
                groupListRepository.findByIdListContaining(id).forEach(i->groupListIds.add(i.getGroupListId()));
            }
            if(groupListIds.size() > 0) {
                cons.add(String.format("e.GROUPLISTID in (%s)", String.join(",", groupListIds.stream().map(i -> i.toString()).collect(Collectors.toSet()))));
            }
        }
        if(!StringUtils.isEmptyOrWhitespace(condition.getPolicy())) {
            Set<String> ids = policyTriggerRepository.findByLabelContaining(condition.getGroup()).stream().map(i -> i.getId().getTriggerId().toString()).collect(Collectors.toSet());
            for (String id : ids) {
                triggerListRepository.findByIdListContaining(id).forEach(i -> policyListIds.add(i.getTriggerListId()));
            }
            if (policyListIds.size() > 0) {
                cons.add(String.format("e.TRIGGERLISTID in (%s)", String.join(",", policyListIds.stream().map(i -> i.toString()).collect(Collectors.toSet()))));
            }
        }

        if(!StringUtils.isEmptyOrWhitespace(condition.getInfo())) {
            cons.add(String.format("e.RESOURCES like '%%%s%%'", condition.getInfo()));
        }
        if(!StringUtils.isEmptyOrWhitespace(condition.getMatches())) {
            cons.add(String.format("e.MATCHTEXT like '%%%s%%'", condition.getMatches()));
        }
        if(!StringUtils.isEmptyOrWhitespace(condition.getApplication())) {
            cons.add(String.format("e.APPLICATIONNAME like '%%%s%%'", condition.getApplication()));
        }
        if(!StringUtils.isEmptyOrWhitespace(condition.getPerson())) {
            cons.add(String.format("t.SAMACCOUNTNAME like '%%%s%%'", condition.getPerson()));
        }
        if(!StringUtils.isEmptyOrWhitespace(condition.getAgent())) {
            cons.add(String.format("a.LABEL like '%%%s%%'", condition.getAgent()));
        }
        if(!StringUtils.isEmptyOrWhitespace(condition.getUser())) {
            cons.add(String.format("t.LABEL like '%%%s%%'", condition.getUser()));
        }

        if(!StringUtils.isEmptyOrWhitespace(condition.getStartAgentTime()) &&
           !StringUtils.isEmptyOrWhitespace(condition.getEndAgentTime()) ) {
            cons.add(String.format("e.AGENTTIME between TO_TIMESTAMP('%s 00:00:00.000000000', 'DD-MM-YYYY HH24:MI:SS.FF') and TO_TIMESTAMP('%s 23:59:59.999999000', 'DD-MM-YYYY HH24:MI:SS.FF')", localeConverter(condition.getStartAgentTime()), localeConverter(condition.getEndAgentTime())));
        }
        if(!StringUtils.isEmptyOrWhitespace(condition.getStartTime()) &&
                !StringUtils.isEmptyOrWhitespace(condition.getEndTime()) ) {
            cons.add(String.format("e.EVIDENCESTARTTIME between TO_TIMESTAMP('%s 00:00:00.000000000', 'DD-MM-YYYY HH24:MI:SS.FF') and TO_TIMESTAMP('%s 23:59:59.999999000', 'DD-MM-YYYY HH24:MI:SS.FF')", localeConverter(condition.getStartTime()), localeConverter(condition.getEndTime())));
        }
        return String.join(" AND ", cons);
    }

    private String extracted(Pageable pageable) {
        List<String> orderList = null;
        Sort sort = pageable.getSort();
        Iterator<Sort.Order> list = sort.stream().iterator();

        orderList = new ArrayList<>();
        while(list.hasNext()) {
            Sort.Order order = list.next();
            String prop = order.getProperty();
            if(prop.equalsIgnoreCase("userdim.label")) {
                prop = "t.LABEL";
            }
            else if(prop.equalsIgnoreCase("userDim.targetUser.label")) {
                prop = "t.SAMACCOUNTNAME";
            }
            else if(prop.equalsIgnoreCase("agentDim.label")) {
                prop = "a.LABEL";
            }
            else{
                prop = String.format("e.%s", prop);
            }
            orderList.add(String.format("%s %s", prop, order.isDescending()? "desc" : ""));
        }
        return String.format(" order by %s ", String.join(",", orderList));
    }
}
