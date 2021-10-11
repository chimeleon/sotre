package com.forcepoint.keystrokeviewer.services;

import com.forcepoint.keystrokeviewer.domains.*;
import com.forcepoint.keystrokeviewer.dtoes.EvidenceRequestDTO;
import com.forcepoint.keystrokeviewer.dtoes.EvidenceResponseDTO;
import com.forcepoint.keystrokeviewer.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.*;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class EvidenceService {
    @Autowired
    private EvidenceRepository repository;

    @Autowired
    private GroupListRepository groupListRepository;
    @Autowired
    private GroupRepository groupRepository;
    @Autowired
    private PolicyTriggerRepository policyTriggerRepository;
    @Autowired
    private TriggerListRepository triggerListRepository;
    @Autowired
    private CategoryListRepository categoryListRepository;
    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private EvidenceJdbcRepository evidenceJdbcRepository;
//    @Autowired
//    private OracleEvidenceJdbcRepository evidenceJdbcRepository;

    public Page<EvidenceResponseDTO> jdbcData(int channel, Pageable pageRequest, EvidenceRequestDTO condition) {
        return evidenceJdbcRepository.findEvidenceByCondition(pageRequest, channel, condition);
    }

    public String jdbcDataForExcel(int channel, Pageable pageRequest, EvidenceRequestDTO condition) {
        List<EvidenceResponseDTO> list = evidenceJdbcRepository.findEvidenceByConditionForExcel(pageRequest, channel, condition);
        StringBuffer sb = new StringBuffer();
//        sb.append(new short[]{0xef,0xbb,0xbf});
        sb.append("EVIDENCETYPE, Channel, Time, AgentTime, Activity, User, Agent, Person, Policy, Applicaiton, Category, Matches, Matches(한글변환), Info/Resource, Group\n");
        Iterator<EvidenceResponseDTO> iter = list.iterator();
        DateTimeFormatter format = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        while(iter.hasNext()) {
            EvidenceResponseDTO item = iter.next();
            sb.append(String.format("%s", item.getEventType().getEvidenceType()));
            sb.append(',');
            sb.append("\"Keyboard\"");
            sb.append(',');
            sb.append(String.format("\"%s\"", format.format(item.getEvidenceStartTime())));
            sb.append(',');
            sb.append(String.format("\"%s\"", format.format(ZonedDateTime.ofInstant(Instant.ofEpochMilli(item.getAgentTime()), ZoneId.of("UTC")))));
            sb.append(',');

            sb.append(String.format("\"%s\"", item.getEventType().getLabel()));
            sb.append(',');
            sb.append(String.format("\"%s\"", item.getUserDim().getLabel()));
            sb.append(',');
            sb.append(String.format("\"%s\"", item.getAgentDim().getLabel()));
            sb.append(',');
            sb.append(String.format("\"%s\"", item.getUserDim().getTargetUser().getSamAccountName()));
            sb.append(',');
            sb.append(String.format("\"%s\"", item.getPolicy()));
            sb.append(',');
            sb.append(String.format("\"%s\"", item.getApplicationName()));
            sb.append(',');
            sb.append(String.format("\"%s\"", item.getCategory()));
            sb.append(',');
            sb.append(String.format("\"%s\"", item.getMatchText()));
            sb.append(',');
            sb.append(String.format("\"%s\"", item.getMatchTextHan()));
            sb.append(',');
            sb.append(String.format("\"%s\"", item.getResources()));
            sb.append(',');
            sb.append(String.format("\"%s\"\n", item.getGroup()));
        }
        return sb.toString();
    }

    public List<Evidence> getByChannel(int channel) {
        return repository.findByChannel(channel);
    }

    public Page<Evidence> getByChannel(int channel, Pageable pageRequest) {
        return repository.findByChannel(channel, pageRequest);
    }

    public Page<Evidence> getByChannel(int channel, Pageable pageRequest, EvidenceRequestDTO condition) {
        DateTimeFormatter format = DateTimeFormatter.ofPattern("yyyy-MM-dd");

        Instant minInstant = Instant.ofEpochMilli(0);
        Instant maxInstant = Instant.ofEpochMilli((Long.MAX_VALUE/100000));

        ZonedDateTime startTime;
        ZonedDateTime endTime;
        Long agentStartTime;
        Long agentEndTime;
        String user;
        String agent;
        String applicationName;
        String matches;
        String resources;
        String person;
        if(condition.getStartTime() != null && condition.getEndTime() != null) {
            startTime = LocalDate.parse(condition.getStartTime(), format).atStartOfDay(ZoneId.of("UTC"));
            endTime = LocalDate.parse(condition.getEndTime(), format).atStartOfDay(ZoneId.of("UTC"));
        }
        else {
            startTime = minInstant.atZone(ZoneOffset.UTC);
            endTime = maxInstant.atZone(ZoneOffset.UTC);
        }

        if(condition.getStartAgentTime() != null && condition.getEndAgentTime() != null) {
            agentStartTime = LocalDate.parse(condition.getStartAgentTime(), format).atStartOfDay(ZoneId.of("UTC")).toEpochSecond();
            agentEndTime = LocalDate.parse(condition.getEndAgentTime(), format).atStartOfDay(ZoneId.of("UTC")).toEpochSecond();
        }
        else {
            agentStartTime = Long.MIN_VALUE;
            agentEndTime = Long.MAX_VALUE;
        }

        if(condition.getUser() != null) {
            user = condition.getUser();//String.format("%%%s%%", condition.getUser());
        }
        else {
            user = "";
        }

        if(condition.getAgent() != null) {
            agent = condition.getAgent();//String.format("%%%s%%", condition.getUser());
        }
        else {
            agent = "";
        }

        if(condition.getApplication() != null) {
            applicationName = condition.getApplication();//String.format("%%%s%%", condition.getUser());
        }
        else {
            applicationName = "";
        }

        if(condition.getMatches() != null) {
            matches = condition.getMatches();//String.format("%%%s%%", condition.getUser());
        }
        else {
            matches = "";
        }

        if(condition.getInfo() != null) {
            resources = condition.getInfo();//String.format("%%%s%%", condition.getUser());
        }
        else {
            resources = "";
        }

        if(condition.getPerson() != null) {
            person = condition.getPerson();//String.format("%%%s%%", condition.getUser());
        }
        else {
            person = "";
        }

        // In case of group, policy, category condition exitsts, need to query each id before execute main query.
        Set<Long> triggerIdList = null;
        Set<Long> groupIdList = null;
        Set<Long> categoryIdList = null;
        Page<Evidence> ret;
        if(condition.getPolicy() != null) {
            List<PolicyTrigger> policyList = policyTriggerRepository.findByLabelContaining(condition.getPolicy());
            triggerIdList = policyList.stream().map(i->i.getId().getTriggerId()).collect(Collectors.toSet());
        }

        if(condition.getGroup() != null) {
            List<C60Group> groupList = groupRepository.findByLabelContaining(condition.getGroup());
            groupIdList = groupList.stream().map(i->i.getId().getGroupId()).collect(Collectors.toSet());
        }

        if(condition.getCategory() != null) {
            List<Category> categoryList = categoryRepository.findByLabelContaining(condition.getCategory());
            categoryIdList = categoryList.stream().map(i->i.getId().getCategoryId()).collect(Collectors.toSet());
        }

        if(condition.getPolicy() != null && condition.getGroup() != null && condition.getCategory() != null) {
            ret = repository.findEvidencesByChannelAndEvidenceStartTimeBetweenAndAgentTimeBetweenAndUserDim_LabelContainingAndAgentDim_LabelContainingAndApplicationNameContainingAndMatchTextContainingAndResourcesContainingAndUserDim_TargetUser_LabelContainingAndCategoryListIdInAndTriggerListidInAndGroupListIdIn
                    (
                            pageRequest,
                            channel,
                            startTime,
                            endTime,
                            agentStartTime,
                            agentEndTime,
                            user,
                            agent,
                            applicationName,
                            matches,
                            resources,
                            person,
                            categoryIdList,
                            triggerIdList,
                            groupIdList
                    );
        }
        else if(condition.getPolicy() != null && condition.getGroup() != null) {
//            findEvidencesByChannelAndEvidenceStartTimeBetweenAndAgentTimeBetweenAndUserDim_LabelContainingAndAgentDim_LabelContainingAndApplicationNameContainingAndMatchTextContainingAndResourcesContainingAndUserDim_TargetUser_LabelContainingAndTriggerListIdInAndGroupListIdIn
            ret = repository.findEvidencesByChannelAndEvidenceStartTimeBetweenAndAgentTimeBetweenAndUserDim_LabelContainingAndAgentDim_LabelContainingAndApplicationNameContainingAndMatchTextContainingAndResourcesContainingAndUserDim_TargetUser_LabelContainingAndTriggerListidInAndGroupListIdIn
                    (
                            pageRequest,
                            channel,
                            startTime,
                            endTime,
                            agentStartTime,
                            agentEndTime,
                            user,
                            agent,
                            applicationName,
                            matches,
                            resources,
                            person,
                            triggerIdList,
                            groupIdList
                    );
        }
        else if(condition.getGroup() != null && condition.getCategory() != null) {
//            findEvidencesByChannelAndEvidenceStartTimeBetweenAndAgentTimeBetweenAndUserDim_LabelContainingAndAgentDim_LabelContainingAndApplicationNameContainingAndMatchTextContainingAndResourcesContainingAndUserDim_TargetUser_LabelContainingAndCategoryListIdInAndGroupListIdIn
            ret = repository.findEvidencesByChannelAndEvidenceStartTimeBetweenAndAgentTimeBetweenAndUserDim_LabelContainingAndAgentDim_LabelContainingAndApplicationNameContainingAndMatchTextContainingAndResourcesContainingAndUserDim_TargetUser_LabelContainingAndCategoryListIdInAndGroupListIdIn
                    (
                            pageRequest,
                            channel,
                            startTime,
                            endTime,
                            agentStartTime,
                            agentEndTime,
                            user,
                            agent,
                            applicationName,
                            matches,
                            resources,
                            person,
                            categoryIdList,
                            groupIdList
                    );
        }
        else if(condition.getPolicy() != null && condition.getCategory() != null) {
//            findEvidencesByChannelAndEvidenceStartTimeBetweenAndAgentTimeBetweenAndUserDim_LabelContainingAndAgentDim_LabelContainingAndApplicationNameContainingAndMatchTextContainingAndResourcesContainingAndUserDim_TargetUser_LabelContainingAndCategoryListIdInAndTriggerListIdIn
            ret = repository.findEvidencesByChannelAndEvidenceStartTimeBetweenAndAgentTimeBetweenAndUserDim_LabelContainingAndAgentDim_LabelContainingAndApplicationNameContainingAndMatchTextContainingAndResourcesContainingAndUserDim_TargetUser_LabelContainingAndCategoryListIdInAndTriggerListidIn
                    (
                            pageRequest,
                            channel,
                            startTime,
                            endTime,
                            agentStartTime,
                            agentEndTime,
                            user,
                            agent,
                            applicationName,
                            matches,
                            resources,
                            person,
                            categoryIdList,
                            triggerIdList
                    );
        }
        else if(condition.getPolicy() != null) {
//            findEvidencesByChannelAndEvidenceStartTimeBetweenAndAgentTimeBetweenAndUserDim_LabelContainingAndAgentDim_LabelContainingAndApplicationNameContainingAndMatchTextContainingAndResourcesContainingAndUserDim_TargetUser_LabelContainingAndTriggerListIdIn
            ret = repository.findEvidencesByChannelAndEvidenceStartTimeBetweenAndAgentTimeBetweenAndUserDim_LabelContainingAndAgentDim_LabelContainingAndApplicationNameContainingAndMatchTextContainingAndResourcesContainingAndUserDim_TargetUser_LabelContainingAndTriggerListidIn
                    (
                            pageRequest,
                            channel,
                            startTime,
                            endTime,
                            agentStartTime,
                            agentEndTime,
                            user,
                            agent,
                            applicationName,
                            matches,
                            resources,
                            person,
                            triggerIdList
                    );
        }
        else if(condition.getGroup() != null) {
//            findEvidencesByChannelAndEvidenceStartTimeBetweenAndAgentTimeBetweenAndUserDim_LabelContainingAndAgentDim_LabelContainingAndApplicationNameContainingAndMatchTextContainingAndResourcesContainingAndUserDim_TargetUser_LabelContainingAndGroupListIdIn
            ret = repository.findEvidencesByChannelAndEvidenceStartTimeBetweenAndAgentTimeBetweenAndUserDim_LabelContainingAndAgentDim_LabelContainingAndApplicationNameContainingAndMatchTextContainingAndResourcesContainingAndUserDim_TargetUser_LabelContainingAndGroupListIdIn
                    (
                            pageRequest,
                            channel,
                            startTime,
                            endTime,
                            agentStartTime,
                            agentEndTime,
                            user,
                            agent,
                            applicationName,
                            matches,
                            resources,
                            person,
                            groupIdList
                    );
        }
        else if(condition.getCategory() != null) {
//            findEvidencesByChannelAndEvidenceStartTimeBetweenAndAgentTimeBetweenAndUserDim_LabelContainingAndAgentDim_LabelContainingAndApplicationNameContainingAndMatchTextContainingAndResourcesContainingAndUserDim_TargetUser_LabelContainingAndCategoryListIdIn
            ret = repository.findEvidencesByChannelAndEvidenceStartTimeBetweenAndAgentTimeBetweenAndUserDim_LabelContainingAndAgentDim_LabelContainingAndApplicationNameContainingAndMatchTextContainingAndResourcesContainingAndUserDim_TargetUser_LabelContainingAndCategoryListIdIn
                    (
                            pageRequest,
                            channel,
                            startTime,
                            endTime,
                            agentStartTime,
                            agentEndTime,
                            user,
                            agent,
                            applicationName,
                            matches,
                            resources,
                            person,
                            categoryIdList
                    );
        }
        else {
            ret = repository.findEvidencesByChannelAndEvidenceStartTimeBetweenAndAgentTimeBetweenAndUserDim_LabelContainingAndAgentDim_LabelContainingAndApplicationNameContainingAndMatchTextContainingAndResourcesContainingAndUserDim_TargetUser_LabelContaining
                    (
                            pageRequest,
                            channel,
                            startTime,
                            endTime,
                            agentStartTime,
                            agentEndTime,
                            user,
                            agent,
                            applicationName,
                            matches,
                            resources,
                            person
                    );
        }

        // category
        Set<Long> categoryListId = ret.getContent().stream().map(i->i.getCategoryListId()).collect(Collectors.toSet());
        List<CategoryList> categoryListList = categoryListRepository.findByCategoryListIdIn(categoryListId);
        Map<Long, String> categoryListIdToCIds = categoryListList.stream().collect(Collectors.toMap(i->i.getCategoryListId(), i->i.getIdList()));
        Set<Long> cIds = categoryListList.stream().flatMap(i-> Arrays.stream(i.getIdList().split(",")).sequential()).map(i->Long.parseLong(i)).collect(Collectors.toSet());
        Map<Long, String> cMap = categoryRepository.findByIdCategoryIdIn(cIds).stream().collect(Collectors.toMap(i->i.getId().getCategoryId(), i->i.getLabel()));
        // group
        Set<Long> groupListId = ret.getContent().stream().map(i->i.getGroupListId()).collect(Collectors.toSet());
        List<GroupList> groupListList = groupListRepository.findByGroupListIdIn(groupListId);
        Map<Long, String> groupListIdToGIds = groupListList.stream().collect(Collectors.toMap(i->i.getGroupListId(), i->i.getIdList()));
        Set<Long> gIds = groupListList.stream().flatMap(i-> Arrays.stream(i.getIdList().split(",")).sequential()).map(i->Long.parseLong(i)).collect(Collectors.toSet());
        Map<Long, String> gMap = groupRepository.findByIdGroupIdIn(gIds).stream().collect(Collectors.toMap(i->i.getId().getGroupId(), i->i.getLabel()));
        //
        Set<Long> triggerPolicyListId = ret.getContent().stream().map(i->i.getTriggerListid()).collect(Collectors.toSet());
        List<TriggerList> triggerListList = triggerListRepository.findByTriggerListIdIn(triggerPolicyListId);
        Map<Long, String> triggerListIdToPIds = triggerListList.stream().collect(Collectors.toMap(i->i.getTriggerListId(), i->i.getIdList()));
        Set<Long> pIds = triggerListList.stream().flatMap(i-> Arrays.stream(i.getIdList().split(",")).sequential()).map(i->Long.parseLong(i)).collect(Collectors.toSet());
        Map<Long, String> pMap = policyTriggerRepository.findByIdTriggerIdIn(pIds).stream().collect(Collectors.toMap(i->i.getId().getTriggerId(), i->i.getLabel()));

        ret.getContent().stream().forEach(i->{
            List<String> cLabel = Arrays.stream(
                    categoryListIdToCIds.get(i.getCategoryListId()).split(",")
            ).map(idList->cMap.get(Long.parseLong(idList))).collect(Collectors.toList());
            i.setCategory(String.join(",", cLabel));

            List<String> gLabel = Arrays.stream(
                    groupListIdToGIds.get(i.getGroupListId()).split(",")
            ).map(idList->gMap.get(Long.parseLong(idList))).collect(Collectors.toList());
            i.setGroup(String.join(",", gLabel));

            List<String> pLabel = Arrays.stream(
                    triggerListIdToPIds.get(i.getTriggerListid()).split(",")
            ).map(idList->pMap.get(Long.parseLong(idList))).collect(Collectors.toList());
            i.setPolicy(String.join(",", pLabel));
        });
        return ret;
    }

}
