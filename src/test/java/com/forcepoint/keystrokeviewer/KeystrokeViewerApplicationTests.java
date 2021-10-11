package com.forcepoint.keystrokeviewer;

import com.forcepoint.keystrokeviewer.component.KoreanCharacterProducer;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.nio.charset.StandardCharsets;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Locale;

//@SpringBootTest
@Slf4j
public class KeystrokeViewerApplicationTests {

	@Test
	void contextLoads() {
		LocalDate date = LocalDate.parse("2021-08-01", DateTimeFormatter.ofPattern("yyyy-MM-dd"));
		Assertions.assertEquals("01-AUG-2021", date.format(DateTimeFormatter.ofPattern("dd-MMM-yyyy", Locale.ENGLISH)).toUpperCase());
	}
	@Test
	void convertTest() {
		KoreanCharacterProducer kp = new KoreanCharacterProducer();
		String abc = "forceintpoint";
		String s;
		s = kp.convert(abc);
		Assertions.assertEquals("랙ᄎ댜ᅮ세ᅢᅣᅮᄉ", s);

		kp = new KoreanCharacterProducer();
		abc = "dkssudgktpdy. sksms";
		s = kp.convert(abc);
		Assertions.assertEquals("안녕하세요. 나는", s);

		kp = new KoreanCharacterProducer();
		abc = "test,facebook.com/api/graphql/";
		s = kp.convert(abc);
		Assertions.assertEquals("ᄉᄃᄂᄉ,ᆱᄎ듀ᅢᅢᅡ.채ᅳ/메ᅣ/ᄒᄀ메ᅩ비/", s);

		kp = new KoreanCharacterProducer();
		abc = "sex";
		s = kp.convert(abc);
		Assertions.assertEquals("ᄂᄃᄐ", s);

		kp = new KoreanCharacterProducer();
		abc = "자";
		s = kp.convert(abc);
		Assertions.assertEquals("자", s);

		kp = new KoreanCharacterProducer();
		abc = "tkatjdwjswk";
		s = kp.convert(abc);
		Assertions.assertEquals("삼성전자", s);

		kp = new KoreanCharacterProducer();
		abc = "ekrtk";
		s = kp.convert(abc);
		Assertions.assertEquals("닥사", s);

		kp = new KoreanCharacterProducer();
		abc = "dksgdl";
		s = kp.convert(abc);
		Assertions.assertEquals("않이", s);
	}
}
