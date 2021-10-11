package com.forcepoint.keystrokeviewer.domains;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name="USERDIM")
@Data
public class UserDim {
    @Id
    @Column(name="JOINUSERID")
    private String joinUserId;
    @Column(length=64)
    private String label;
    @Column(name="USERID")
    private String userId;
    @Column(name="USERTYPE", length = 20)
    private String userType;
    @OneToOne
    @JoinColumn(name="userId", referencedColumnName = "userId")
    private TargetUser targetUser;
}
