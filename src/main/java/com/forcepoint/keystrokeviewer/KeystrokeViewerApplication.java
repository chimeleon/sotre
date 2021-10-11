package com.forcepoint.keystrokeviewer;

import org.apache.catalina.Context;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.embedded.tomcat.TomcatContextCustomizer;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class KeystrokeViewerApplication {
	public static void main(String[] args) {
		SpringApplication.run(KeystrokeViewerApplication.class, args);
	}

}
