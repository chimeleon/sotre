package com.forcepoint.keystrokeviewer.dtoes;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.forcepoint.keystrokeviewer.component.KoreanCharacterProducer;
import com.forcepoint.keystrokeviewer.domains.AgentDim;
import com.forcepoint.keystrokeviewer.domains.EventType;
import com.forcepoint.keystrokeviewer.domains.UserDim;
import lombok.Data;

import javax.persistence.*;
import java.time.ZonedDateTime;

@Data
public class EvidenceResponseDTO {
    private String evidenceId;
    private Integer channel;
    private Long groupListId;
    private Long triggerListid;
    private Long categoryListId;
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", timezone = "UTC")
    private ZonedDateTime evidenceStartTime;
    private String matchText;
    private String applicationName;
    private String resources;
    private Long agentTime;

    private EventTypeDto eventType;
    private UserDto userDim;
    private AgentDto agentDim;

    private String policy;
    private String category;
    private String group;

    private String matchTextHan;
    public String getMatchTextHan() {
        if(matchText == null) return null;
        KoreanCharacterProducer kp = new KoreanCharacterProducer();
        return kp.convert(matchText);
    }
}
