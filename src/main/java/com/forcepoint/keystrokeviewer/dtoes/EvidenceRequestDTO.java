package com.forcepoint.keystrokeviewer.dtoes;

import lombok.Data;

import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;

@Data
public class EvidenceRequestDTO {
        private String startTime;
        private String endTime;
        private String startAgentTime;
        private String endAgentTime;
        private String user;
        private String agent;
        private String person;
    private String policy;
        private String application;
    private String category;
        private String matches;
        private String info;
    private String group;
    private String evidenceType;

    private String rangeFrom = ZonedDateTime.now().minusDays(7).format(DateTimeFormatter.ofPattern("yyyy-MM-dd"));
    private String rangeTo = ZonedDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd"));
}
