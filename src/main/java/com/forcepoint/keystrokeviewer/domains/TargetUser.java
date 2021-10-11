package com.forcepoint.keystrokeviewer.domains;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="TARGETUSER")
@Data
public class TargetUser {
    @Id
    @Column(name="USERID")
    private String userId;
    @Column(name="LABEL", length=64)
    private String label;
    @Column(name="SAMACCOUNTNAME", length=64)
    private String samAccountName;
}
