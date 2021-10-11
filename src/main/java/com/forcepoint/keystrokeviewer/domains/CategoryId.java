package com.forcepoint.keystrokeviewer.domains;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
@Data
public class CategoryId implements Serializable {
    @Column(name="CATEGORYID") private Long categoryId;
    @Column(name="CONFIGSEQUENCE") private Long configSequence;
}
