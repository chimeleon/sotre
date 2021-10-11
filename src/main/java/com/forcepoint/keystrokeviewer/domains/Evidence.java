package com.forcepoint.keystrokeviewer.domains;

import com.forcepoint.keystrokeviewer.component.KoreanCharacterProducer;
import lombok.Data;

import javax.persistence.*;
import java.time.ZonedDateTime;

@Entity
@Table(name = "EVIDENCE")
@Data
public class Evidence {
    @Id
    @Column(name = "EVIDENCEID")
    private String evidenceId;
    @Column(name = "DATEID")
    private ZonedDateTime dateId;
    @Column(name = "PRIORITY")
    private Long priority;
    @Column(insertable = false, updatable = false)
    private String userid;
    @Column(insertable = false, updatable = false)
    private String agentid;
    @Column(name = "TRANSACTIONID")
    private Long transactionId;
    @Column
    private Integer channel;
    @Column
    private Integer status;
    @Column(name = "EVIDENCETYPE")
    private Integer evidenceType;
    @Column(name = "ROWADDEDDATE")
    private Long rowAddedDate;
    @Column(name = "GROUPLISTID")
    private Long groupListId;
    @Column(name = "TRIGGERLISTID")
    private Long triggerListid;
    @Column(name = "CATEGORYLISTID")
    private Long categoryListId;
    @Column(name="ACTIVITY", insertable = false, updatable = false)
    private Integer activity;
    @Column(name = "EVIDENCESTARTTIME")
    private ZonedDateTime evidenceStartTime;
    @Column(name = "ISSECURITYSET")
    private Character isSecuritySet;
    @Column(name = "ISTEXTINDEXED")
    private Character isTextIndexed;
    @Column(name = "NEEDSWORK")
    private Character needsWork;
    @Column(name = "PROTOCOLVERSION")
    private Long protocolVersion;
    @Column(name = "LASTUPDATEDDATE")
    private ZonedDateTime lastUpdatedDate;
    @Column(name = "EVIDENCEENDTIME")
    private ZonedDateTime evidenceEndTime;
    @Column(name = "BASETIME")
    private Long baseTime;
    @Column(name="SEARCHABLETEXT", length = Integer.MAX_VALUE)
    private String searchableText;
    @Column(name = "MATCHTEXT")
    private String matchText;
    @Column(name = "APPLICATIONNAME")
    private String applicationName;
    @Column(name = "RUNASUSERNAME")
    private String runAsUsername;
    @Column(name="RESOURCES", length = 4000)
    private String resources;
    @Column(name="LASTCOMMENT", length = 4000)
    private Integer lastComment;
    @Column(name = "PRIMARYEVIDENCEID")
    private String primaryEvidenceId;
    @Column(name = "PRIMARYDATEID")
    private ZonedDateTime primaryDateId;
    @Column(name = "TIMEVERIFIED")
    private Character timeVerified;
    @Column(name = "AGENTTIME")
    private Long agentTime;
    @Column(name = "TIMEZONE")
    private Integer timezone;
    @Column(name = "WINDOWTITLE")
    private String windowtitle;
    @Column(name = "COLLECTEDSIZE")
    private Long collectedSize;
    @Column(name = "FILECOUNT")
    private Integer fileCount;
    @Column(name = "SENTCOUNT")
    private Integer sentCount;

    @OneToOne
    @JoinColumn(name = "ACTIVITY", referencedColumnName = "EVENTCODE")
    private EventType eventType;
    @OneToOne
    @JoinColumn(name="userid", referencedColumnName = "joinuserid")
    private UserDim userDim;
    @OneToOne
    @JoinColumn(name="agentid", referencedColumnName = "joinagentid")
    private AgentDim agentDim;

    @Transient
    private String policy;
    @Transient
    private String category;
    @Transient
    private String group;

    @Transient
    private String matchTextHan;
    public String getMatchTextHan() {
        KoreanCharacterProducer kp = new KoreanCharacterProducer();
        return kp.convert(matchText);
    }
}
