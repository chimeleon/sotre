package com.forcepoint.keystrokeviewer.domains;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "CATEGORYLIST")
@Data
public class CategoryList {
    @Id
    @Column(name="CATEGORYLISTID")
    private Long categoryListId;
    @Column(name="IDCOUNT")
    private Long idCount;
    @Column(name="IDLIST", length = 4000)
    private String idList;
    @Column(name="IDLISTOVERFLOW")
    private Long idListOverflow;
}
