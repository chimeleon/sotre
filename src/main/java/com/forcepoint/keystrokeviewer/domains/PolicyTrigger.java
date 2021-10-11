package com.forcepoint.keystrokeviewer.domains;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name="POLICYTRIGGER_H")
@Data
public class PolicyTrigger {
    @EmbeddedId
    private PolicyId id;
    @Column(name="LABEL", length=64)
    private String label;
}
