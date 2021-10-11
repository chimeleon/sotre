package com.forcepoint.keystrokeviewer.dtoes;

import lombok.Data;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

@Data
public class KoreanCharacter {
    private KoreanCharacterType type;
    private String engChar;
    private Character korChar;

    private static Set<String> character = new HashSet<String>(Arrays.asList(new String[] {"r", "R", "s", "e", "E", "f", "a", "q", "Q",  "t", "T", "d", "w", "W", "c", "z", "x", "v", "g",
            "r", "R", "rt", "s", "sw", "sg", "e",      "f", "fr", "fa", "fq", "ft", "fx", "fv", "fg", "a", "q", "qt", "t", "T", "d", "w",      "c", "z", "x", "v", "g",
            "k","o","i","O","j","p","u","P","h","hk", "ho","hl","y","n","nj","np", "nl", "b", "m", "ml", "l"}));

    public void setEngChar(String engChar) {
        if(!KoreanCharacter.character.contains(engChar)) {
            this.type = KoreanCharacterType.None;
        }
        this.engChar = engChar;
    }

    public void setType(KoreanCharacterType type) {
        this.type = type;
    }
}
