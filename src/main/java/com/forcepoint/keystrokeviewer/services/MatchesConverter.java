package com.forcepoint.keystrokeviewer.services;

import com.forcepoint.keystrokeviewer.dtoes.KoreanCharacter;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MatchesConverter {
// 초,중,종성을 판단할 수 있는 함수
    public String convert(final String eng) {
        char[] chars = new char[eng.length()];
        eng.getChars(0, eng.length() - 1, chars, 0);

        wrapKoreanCharacter(chars);

        return null;
    }


    private void wrapKoreanCharacter(final char[] chars) {
        List<KoreanCharacter> ret = new ArrayList<>();

    }
}
