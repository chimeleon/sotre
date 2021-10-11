package com.forcepoint.keystrokeviewer.repositories;

import com.forcepoint.keystrokeviewer.domains.Evidence;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.ZonedDateTime;
import java.util.List;
import java.util.Set;

public interface EvidenceRepository extends JpaRepository<Evidence, String> {
    List<Evidence> findByChannel(Integer channel);
    Page<Evidence> findByChannel(Integer channel, Pageable pageable);

    Page<Evidence> findEvidencesByChannelAndEvidenceStartTimeBetweenAndAgentTimeBetweenAndUserDim_LabelContainingAndAgentDim_LabelContainingAndApplicationNameContainingAndMatchTextContainingAndResourcesContainingAndUserDim_TargetUser_LabelContainingAndCategoryListIdInAndTriggerListidInAndGroupListIdIn(
            Pageable pageable,
            Integer channel,
            ZonedDateTime startEvidenceTime,
            ZonedDateTime endEvidenceTime,
            Long startAgentTime,
            Long endAgentTime,
            String user,
            String agent,
            String applicationName,
            String matches,
            String resources,
            String person,
            //AndCategoryListIdInAndTriggerListIdInAndGroupListIdIn
            Set<Long> categoryListId,
            Set<Long> triggerListId,
            Set<Long> groupListIdId
    );
    Page<Evidence> findEvidencesByChannelAndEvidenceStartTimeBetweenAndAgentTimeBetweenAndUserDim_LabelContainingAndAgentDim_LabelContainingAndApplicationNameContainingAndMatchTextContainingAndResourcesContainingAndUserDim_TargetUser_LabelContainingAndTriggerListidIn(
            Pageable pageable,
            Integer channel,
            ZonedDateTime startEvidenceTime,
            ZonedDateTime endEvidenceTime,
            Long startAgentTime,
            Long endAgentTime,
            String user,
            String agent,
            String applicationName,
            String matches,
            String resources,
            String person,
            //AndCategoryListIdInAndTriggerListIdInAndGroupListIdIn
            Set<Long> triggerListId
    );
    Page<Evidence> findEvidencesByChannelAndEvidenceStartTimeBetweenAndAgentTimeBetweenAndUserDim_LabelContainingAndAgentDim_LabelContainingAndApplicationNameContainingAndMatchTextContainingAndResourcesContainingAndUserDim_TargetUser_LabelContainingAndCategoryListIdIn(
            Pageable pageable,
            Integer channel,
            ZonedDateTime startEvidenceTime,
            ZonedDateTime endEvidenceTime,
            Long startAgentTime,
            Long endAgentTime,
            String user,
            String agent,
            String applicationName,
            String matches,
            String resources,
            String person,
            //AndCategoryListIdInAndTriggerListIdInAndGroupListIdIn
            Set<Long> categoryListId
    );
    Page<Evidence> findEvidencesByChannelAndEvidenceStartTimeBetweenAndAgentTimeBetweenAndUserDim_LabelContainingAndAgentDim_LabelContainingAndApplicationNameContainingAndMatchTextContainingAndResourcesContainingAndUserDim_TargetUser_LabelContainingAndGroupListIdIn(
            Pageable pageable,
            Integer channel,
            ZonedDateTime startEvidenceTime,
            ZonedDateTime endEvidenceTime,
            Long startAgentTime,
            Long endAgentTime,
            String user,
            String agent,
            String applicationName,
            String matches,
            String resources,
            String person,
            //AndCategoryListIdInAndTriggerListIdInAndGroupListIdIn
            Set<Long> groupListIdId
    );
    Page<Evidence> findEvidencesByChannelAndEvidenceStartTimeBetweenAndAgentTimeBetweenAndUserDim_LabelContainingAndAgentDim_LabelContainingAndApplicationNameContainingAndMatchTextContainingAndResourcesContainingAndUserDim_TargetUser_LabelContainingAndCategoryListIdInAndTriggerListidIn(
            Pageable pageable,
            Integer channel,
            ZonedDateTime startEvidenceTime,
            ZonedDateTime endEvidenceTime,
            Long startAgentTime,
            Long endAgentTime,
            String user,
            String agent,
            String applicationName,
            String matches,
            String resources,
            String person,
            //AndCategoryListIdInAndTriggerListIdInAndGroupListIdIn
            Set<Long> categoryListId,
            Set<Long> triggerListId
    );
    Page<Evidence> findEvidencesByChannelAndEvidenceStartTimeBetweenAndAgentTimeBetweenAndUserDim_LabelContainingAndAgentDim_LabelContainingAndApplicationNameContainingAndMatchTextContainingAndResourcesContainingAndUserDim_TargetUser_LabelContainingAndCategoryListIdInAndGroupListIdIn(
            Pageable pageable,
            Integer channel,
            ZonedDateTime startEvidenceTime,
            ZonedDateTime endEvidenceTime,
            Long startAgentTime,
            Long endAgentTime,
            String user,
            String agent,
            String applicationName,
            String matches,
            String resources,
            String person,
            //AndCategoryListIdInAndTriggerListIdInAndGroupListIdIn
            Set<Long> categoryListId,
            Set<Long> groupListIdId
    );
    Page<Evidence> findEvidencesByChannelAndEvidenceStartTimeBetweenAndAgentTimeBetweenAndUserDim_LabelContainingAndAgentDim_LabelContainingAndApplicationNameContainingAndMatchTextContainingAndResourcesContainingAndUserDim_TargetUser_LabelContainingAndTriggerListidInAndGroupListIdIn(
            Pageable pageable,
            Integer channel,
            ZonedDateTime startEvidenceTime,
            ZonedDateTime endEvidenceTime,
            Long startAgentTime,
            Long endAgentTime,
            String user,
            String agent,
            String applicationName,
            String matches,
            String resources,
            String person,
            //AndCategoryListIdInAndTriggerListIdInAndGroupListIdIn
            Set<Long> triggerListId,
            Set<Long> groupListIdId
    );
    Page<Evidence> findEvidencesByChannelAndEvidenceStartTimeBetweenAndAgentTimeBetweenAndUserDim_LabelContainingAndAgentDim_LabelContainingAndApplicationNameContainingAndMatchTextContainingAndResourcesContainingAndUserDim_TargetUser_LabelContaining(
        Pageable pageable,
        Integer channel,
        ZonedDateTime startEvidenceTime,
        ZonedDateTime endEvidenceTime,
        Long startAgentTime,
        Long endAgentTime,
        String user,
        String agent,
        String applicationName,
        String matches,
        String resources,
        String person
    );

}
