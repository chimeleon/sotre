package com.forcepoint.keystrokeviewer.domains;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="C60USER")
@Data
public class C60User {
    @Id
    @Column(name="OPERATORID")
    private Long operatorid;
    @Column(length = 32, name="USERNAME") private String username;
    @Column(name="CONFIGSEQUENCE") private Long configsequence;
    @Column(name="AUTHORIZATIONTYPE") private Integer authorizationtype;
    @Column(name="ISDISABLED") private Boolean isdisabled;
    @Column(name="ISSYSTEM") private Boolean issystem;
    @Column(name="ISAUTHORIZER") private Boolean isauthorizer;
    @Column(name="ISTWOFACTOR") private Boolean istwofactor;
    @Column(name="CERTIFICATEID") private Long certificateid;
    @Column(length = 64, name="PASSWD") private String passwd;
    @Column(length = 64, name="DISPLAYNAME") private String displayname;
    @Column(length = 64, name="NOTIFICATIONEMAIL") private String notificationemail;
    @Column(name="PASSWORDLASTCHANGED") private Long passwordlastchanged;
    @Column(name="LASTLOGIN") private Long lastlogin;
    @Column(length = Integer.MAX_VALUE, name="PREFERENCESCLOB") private String preferencesclob;
    @Column(name="PROPERTYSETID") private Long propertysetid;
}
