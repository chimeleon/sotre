package com.forcepoint.keystrokeviewer.domains;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name="AGENTDIM")
@Data
public class AgentDim {
    @Id
    @Column(name="JOINAGENTID")
    private String joinAgentId;
    @Column(length = 64)
    private String label;
    @Column(name="AGENTID")
    private String agentId;
    @Column(name="AGENTTYPE", length = 20)
    private String agentType;
}
