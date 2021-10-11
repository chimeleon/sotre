package com.forcepoint.keystrokeviewer.domains;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
@Data
public class C60GroupId implements Serializable {
    @Column(name="GROUPID") private Long groupId;
    @Column(name="CONFIGSEQUENCE") private Long configSequence;
}
