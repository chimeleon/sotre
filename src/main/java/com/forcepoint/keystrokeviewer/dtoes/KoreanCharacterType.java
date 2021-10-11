package com.forcepoint.keystrokeviewer.dtoes;

public enum KoreanCharacterType {
    None(0),
    FirstSound(1),
    MiddleSound(2),
    EndSound(4),
    FirstOrEndSound(5);

    private int values;
    KoreanCharacterType(int value) {
        this.values = value;
    }

    public int value() {
        return this.values;
    }
}
