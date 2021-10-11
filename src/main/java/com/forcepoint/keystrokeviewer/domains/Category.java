package com.forcepoint.keystrokeviewer.domains;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "CATEGORY_H")
@Data
public class Category {
//    @Id
//    @Column(name="CATEGORYID") private Long categoryId;
//    @Column(name="CONFIGSEQUENCE") private Long configSequence;
    @EmbeddedId
    private CategoryId id;
    @Column(name="LABEL", length=64) private String label;
    @Column(name="OWNEROPERATORID") private Long ownerOperatorId;
    @Column(name="DESCRIPTION") private String description;
    @Column(name="SUBSTITUTE", length=64) private String substitute;
    @Column(name="VERSION") private Long version;
    @Column(name="GUID") private String guid;
    @Column(name="CATALOGNUMBER", length=64) private String catalogNumber;
}
