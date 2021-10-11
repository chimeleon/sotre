package com.forcepoint.keystrokeviewer.component;

import com.forcepoint.keystrokeviewer.dtoes.KoreanCharacter;
import com.forcepoint.keystrokeviewer.dtoes.KoreanCharacterType;
import lombok.extern.slf4j.Slf4j;

import java.nio.charset.StandardCharsets;
import java.util.*;

@Slf4j
public class KoreanCharacterProducer {
    private static final List<String> firstSounds = new ArrayList<String>(Arrays.asList(new String[] {"r", "R",       "s",             "e", "E", "f",                                           "a", "q", "Q",  "t", "T", "d", "w", "W", "c", "z", "x", "v", "g"}));
    private static final List<String> endSounds = new ArrayList<String>(Arrays.asList(  new String[] {"r", "R", "rt", "s", "sw", "sg", "e",      "f", "fr", "fa", "fq", "ft", "fx", "fv", "fg", "a", "q", "qt", "t", "T", "d", "w",      "c", "z", "x", "v", "g"}));
    private static final List<String> midSounds = new ArrayList<String>(Arrays.asList(  new String[] {"k","o","i","O","j","p","u","P","h","hk", "ho","hl","y","n","nj","np", "nl", "b", "m", "ml", "l"}));

    // 영타를 한글문자로 대응하는데 사용하는 큐 ex) rt -> ㄳ
    private Queue<Character> tempChar = new LinkedList<>();
    private Deque<KoreanCharacter> chars = new LinkedList<>();
    private Stack<KoreanCharacter> combiner = new Stack<>();

    public String convert(String s) {
        StringBuffer sb = new StringBuffer();
        sb.append(s);
        sb.append('\n');
        s = sb.toString();
        sb = new StringBuffer();

        char[] characters = s.toCharArray();
        KoreanCharacter kc;
        Character c;
        for(char b : characters) {
            kc = add(b);
            if(kc == null) continue;
            if(
                kc.getType() == KoreanCharacterType.MiddleSound &&
                chars.peekLast().getEngChar().length() > 1
            ) {
                char[] arr = chars.pollLast().getEngChar().toCharArray();
                KoreanCharacter first = new KoreanCharacter();
                first.setType(KoreanCharacterType.EndSound);
                first.setEngChar(Character.toString(arr[0]));
                chars.add(first);

                KoreanCharacter second = new KoreanCharacter();
                second.setType(KoreanCharacterType.FirstSound);
                second.setEngChar(Character.toString(arr[1]));
                chars.add(second);
            }
            chars.add(kc);

            // 문자열 입력이 끝난 경우
//            if (b == '\n') {
//                combiner.push(kc);
//                sb.append(makeKoreanChar());
//            }
//            else if(combiner.size() == 0 && ( (kc.getType().value() & KoreanCharacterType.FirstSound.value()) > 0 )) {
//                combiner.push(kc);
//            }
//            else if(combiner.size() == 1 && ( (kc.getType().value() & KoreanCharacterType.MiddleSound.value()) > 0 )) {
//                combiner.push(kc);
//            }
//            else if(combiner.size() == 2 && ( (kc.getType().value() & KoreanCharacterType.EndSound.value()) > 0 )) {
//                combiner.push(kc);
//            }
//            else {
//                if(combiner.size() > 0) {
//                    sb.append(makeKoreanChar());
//                    combiner.push(kc);
//                    // 한 글자가 끝나고 다음 글자 시작은 초성으로 시작해야 한다.
//                    // 아니면 그대로 출력하고 다음 글자부터 시작
//                    if((kc.getType().value() & 1) == 0) {
//                        sb.append(makeKoreanChar());
//                    }
//                }
//                else {
//                    combiner.push(kc);
//                    sb.append(makeKoreanChar());
//                }
//            }

//            if(kc != null) {
//                if(kc.getType().value() == 0) {
//                    sb.append(kc.getEngChar());
//                }
//                else {
//                    c = makeKoreanChar(kc);
//                    if (c != null) {
//                        sb.append(c.charValue());
//                    }
//                }
//            }
        }
        KoreanCharacter last = new KoreanCharacter();
        last.setEngChar(null);
        chars.addLast(last);

        for(KoreanCharacter koreanCharacter: chars) {
            if(koreanCharacter.getEngChar() == null) {
                Character character = makeKoreanChar();
                if(character != null) {
                    sb.append(character);
                }
                break;
            }
            if(combiner.size() == 0 && ( (koreanCharacter.getType().value() & KoreanCharacterType.FirstSound.value()) > 0 )) {
                combiner.push(koreanCharacter);
            }
            else if(combiner.size() == 1 && ( (koreanCharacter.getType().value() & KoreanCharacterType.MiddleSound.value()) > 0 )) {
                combiner.push(koreanCharacter);
            }
            else if(combiner.size() == 2 && ( (koreanCharacter.getType().value() & KoreanCharacterType.EndSound.value()) > 0 )) {
                combiner.push(koreanCharacter);
            }
            else {
                if(combiner.size() > 0) {
                    KoreanCharacter tmp = null;
                    if(combiner.size() == 3 && koreanCharacter.getType() == KoreanCharacterType.MiddleSound) {
                        tmp = combiner.pop();
                    }
                    sb.append(makeKoreanChar());
                    if(tmp != null) {
                        combiner.push(tmp);
                    }
                    combiner.push(koreanCharacter);
                    // 한 글자가 끝나고 다음 글자 시작은 초성으로 시작해야 한다.
                    // 아니면 그대로 출력하고 다음 글자부터 시작
                    //
                    if(tmp == null && (koreanCharacter.getType().value() & 1) == 0) {
                        sb.append(makeKoreanChar());
                    }
                }
                else {
                    combiner.push(koreanCharacter);
                    sb.append(makeKoreanChar());
                }
            }
        }
        return sb.toString();
    }

    private Character makeKoreanChar() {
//        combineCharcter(kc);
        KoreanCharacter last;
        KoreanCharacter middle;
        KoreanCharacter first;
        switch (combiner.size()) {
            case 3: {
                last = combiner.pop();
                middle = combiner.pop();
                first = combiner.pop();
                int unicode = 0xAC00 +
                        firstSounds.indexOf(first.getEngChar()) * 21 * 28+
                        midSounds.indexOf(middle.getEngChar()) * 28+
                endSounds.indexOf(last.getEngChar()) + 1;
                return (char)unicode;
            }
            case 2: {
                middle = combiner.pop();
                first = combiner.pop();
                int unicode = 0xAC00 +
                        firstSounds.indexOf(first.getEngChar()) * 21 * 28 +
                        midSounds.indexOf(middle.getEngChar())* 28;
                return (char)unicode;
            }
            case 1: {
                last = combiner.pop();
                // 한글이 아니면
                switch (last.getType().value()) {
                    //KoreanCharacterType.MiddleSound.value()
                    case 2: {
                        return (char) (0x1161 + midSounds.indexOf(last.getEngChar()));
                    }
                    //KoreanCharacterType.EndSound
                    case 4: {
                        return (char) (0x11A7 + endSounds.indexOf(last.getEngChar()) + 1);
                    }
                    //KoreanCharacterType.FirstSound
                    case 1:
                    //KoreanCharacterType.FirstOrEndSound
                    case 5:{
                        return (char) (0x1100 + firstSounds.indexOf(last.getEngChar()));
                    }
                    default: {
                        return last.getEngChar().toCharArray()[0];
                    }
                }
            }
            default:
                return null;
        }
    }

    private void combineCharcter(KoreanCharacter kc) {
        if(kc == null) {
            Iterator<KoreanCharacter> iter = chars.iterator();
            while(iter.hasNext()) {
                combiner.push(iter.next());
            }
            chars.clear();
            return;
        }

        if(kc.getType().value() == 0) {
            combiner.push(kc);
        }
        else {
            chars.add(kc);
        }
        if(chars.size() >= 4) {
            KoreanCharacter tmp = chars.poll();
            combiner.push(tmp);

            // 첫 문자가 초성 또는 초종성이 아닌 경우 스택에 쌓고 리턴한다.
            if( (tmp.getType().value() & KoreanCharacterType.FirstSound.value()) <= 0) {
                return;
            }

            // 두번째 문자가 중성이 아니면 다시 돌려 놓고 리턴
            tmp = chars.poll();
            if(tmp.getType().value() != KoreanCharacterType.MiddleSound.value()) {
                chars.addFirst(tmp);
                return;
            }
            else {
                combiner.push(tmp);
            }

            tmp = chars.poll();
            // 세번째 문자가 종성이면 쌓고 리턴
            if(tmp.getType().value() == KoreanCharacterType.EndSound.value()) {
                combiner.push(tmp);
                return;
            }
            // 초종성이면 네번째 문자에 따라 결정
            if(tmp.getType().value() == KoreanCharacterType.FirstOrEndSound.value()) {
                // 마지막이 중성이면 돌려놓고 리턴
                if(kc.getType().value() == KoreanCharacterType.MiddleSound.value()) {
                    chars.addFirst(tmp);
                    return;
                }
                else {
                    combiner.push(tmp);
                    return;
                }
            }
            else {
                chars.addFirst(tmp);
            }
        }
    }

    /**
     * 영타를 한글문자로 변환
     * @param c 영타 문자 입력. 문장이 끝날때 null 입력.
     * @return 한글 문자. 판단할 수 없을 경우 null.
     */
    private KoreanCharacter add(Character c) {
        if(c!= null) {
            tempChar.add(c);
            // 각 한글 문자에 대응하는 영문자의 최대 갯수가 2개이기 때문에 2개가 입력되기 전에는 동작하지 않는다.
            if(tempChar.size() == 2) {
                // 전체
                StringBuffer sb = new StringBuffer();
                for(Character character: tempChar) {
                    sb.append(character.charValue());
                }
                String doubleSound = sb.toString();
                KoreanCharacter kc;
                kc = new KoreanCharacter();
                kc.setEngChar(doubleSound);

                // 초성에는 영문자 두자에 대응하는 글자가 없기 때문에 중성, 종성에 대해서만 확인한다.
                if(midSounds.contains(doubleSound)) {
                    kc.setType(KoreanCharacterType.MiddleSound);
                    tempChar.clear();
                    return kc;
                }
                else if(endSounds.contains(doubleSound)) {
                    kc.setType(KoreanCharacterType.EndSound);
                    tempChar.clear();
                    return kc;
                }

                String singleSound = tempChar.poll().toString();
                kc.setEngChar(singleSound);
                if(endSounds.contains(singleSound) && firstSounds.contains(singleSound)) {
                    kc.setType(KoreanCharacterType.FirstOrEndSound);
                    return kc;
                }
                else if(firstSounds.contains(singleSound)) {
                    kc.setType(KoreanCharacterType.FirstSound);
                    return kc;
                }
                else if(midSounds.contains(singleSound)) {
                    kc.setType(KoreanCharacterType.MiddleSound);
                    return kc;
                }
                else if(endSounds.contains(singleSound)) {
                    kc.setType(KoreanCharacterType.EndSound);
                    return kc;
                }
                else {
                    return kc;
                }
            }
            else {
                return null;
            }
        }
        // null이 들어온 것은 입력이 끝났음을 의미함. 큐에 남아있는 문자에 대한 처리를 해 준다.
        // 단 큐에는 입력시점에 최대 1개의 문자만 존재해야 하므로 단일 문자에 대해서만 처리한다.
        else {
            if(tempChar.size() >0) {
                String singleSound = tempChar.poll().toString();
                KoreanCharacter kc;
                kc = new KoreanCharacter();
                kc.setEngChar(singleSound);
                if (endSounds.contains(singleSound) && firstSounds.contains(singleSound)) {
                    kc.setType(KoreanCharacterType.FirstOrEndSound);
                    return kc;
                } else if (firstSounds.contains(singleSound)) {
                    kc.setType(KoreanCharacterType.FirstSound);
                    return kc;
                } else if (midSounds.contains(singleSound)) {
                    kc.setType(KoreanCharacterType.MiddleSound);
                    return kc;
                } else if (endSounds.contains(singleSound)) {
                    kc.setType(KoreanCharacterType.EndSound);
                    return kc;
                }
                else {
                    return kc;
                }
            }
            return null;
        }
    }
}
