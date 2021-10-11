package com.forcepoint.keystrokeviewer.domains;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TRIGGERLIST")
@Data
public class TriggerList {
    @Id
    @Column(name="TRIGGERLISTID")
    private Long triggerListId;
    @Column(name="IDCOUNT")
    private Long idCount;
    @Column(name="IDLIST", length = 4000)
    private String idList;
    @Column(name="IDLISTOVERFLOW")
    private Long idListOverflow;
}
