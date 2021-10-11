package com.forcepoint.keystrokeviewer.domains;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
    @Data
    public class PolicyId implements Serializable {
        @Column(name="TRIGGERID")
        private Long triggerId;
        @Column(name="CONFIGSEQUENCE")
        private Long configSequence;
    }