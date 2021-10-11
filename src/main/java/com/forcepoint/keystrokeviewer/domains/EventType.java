package com.forcepoint.keystrokeviewer.domains;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="EVENTTYPE")
@Data
public class EventType {
    @Id
    @Column(name="EVENTCODE")
    private Integer eventCode;
    @Column(name="LABEL", length=64)
    private String label;
    @Column(name="ISACTIVITY")
    private Character isActivity;
    @Column(name="ISDEPRECATED")
    private Character isdeprecated;
    @Column(name="ISFORACTIONS")
    private Character isForactions;
    @Column(name="INTERNALNAME", length = 64)
    private String internalName;
    @Column(name="ISDEFAULTFORACTIONS")
    private Character isDefaultForActions;
    @Column(name="MVSR")
    private Character mvsr;
    @Column(name="GROUPORDER")
    private String groupOrder;
    @Column(name="RULETOOLTIP", length=1024)
    private String ruleTooltip;
    @Column(name="ACTIONTOOLTIP", length=1024)
    private String actionTooltip;
    @Column(name="CHANNELS", length=1024)
    private String channels;
    @Column(name="RULES", length=1024)
    private String rules;
    @Column(name="RULEATTRIBUTETYPES", length=1024)
    private String ruleAttributeTypes;
    @Column(name="ACTIONATTRIBUTETYPES", length=1024)
    private String actionAttributeTypes;
    @Column(name="DEFAULTCHANNELS", length=1024)
    private String defaultChannels;
    @Column(name="DEFAULTRULES", length=1024)
    private String defaultRules;
    @Column(name="PLATFORMFAMILIES", length=1024)
    private String platformFamilies;
}
