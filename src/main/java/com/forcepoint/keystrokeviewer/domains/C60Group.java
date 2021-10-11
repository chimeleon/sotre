package com.forcepoint.keystrokeviewer.domains;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name="C60GROUP_H")
@Data
public class C60Group {
    @EmbeddedId
    private C60GroupId id;
    @Column(name="LABEL", length=64) private String label;
    @Column(name="ISDISABLED") private Long isDisabled;
    @Column(name="GUID") private String guid;
    @Column(name="DESCRIPTION") private String description;
    @Column(name="SUBSTITUTE", length=64) private String substitute;
    @Column(name="ROWADDEDDATE") private Long rowAddedDate;
    @Column(name="TYPE") private Long type;
    @Column(name="PARENTID") private Long parentId;
    @Column(name="COLORRED") private Long colorRed;
    @Column(name="COLORGREEN") private Long colorGreen;
    @Column(name="COLORBLUE") private Long colorBlue;
}
