package com.forcepoint.keystrokeviewer.dtoes;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
    private String label;
    private TargetUserDto targetUser;
}
