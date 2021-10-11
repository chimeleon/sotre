package com.forcepoint.keystrokeviewer;

import com.forcepoint.keystrokeviewer.services.C60UserService;
import org.apache.tomcat.util.security.MD5Encoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.MessageDigestPasswordEncoder;
import org.springframework.util.StreamUtils;

import java.io.*;
import java.nio.charset.Charset;
import java.util.Arrays;
import java.util.Set;
import java.util.stream.Collectors;

@EnableWebSecurity
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

  @Autowired
  private C60UserService userDetailsService;
  
  @Override
  protected void configure(AuthenticationManagerBuilder auth) throws Exception {
    auth.authenticationProvider(authenticationProvider());
  }

  private final String ipSetting;
  public SecurityConfig() {
    File f = new File("./ipAddressSetting.txt");
    if(!f.exists()) {
      try {
        f.createNewFile();
      } catch (IOException e) {
        e.printStackTrace();
      }
    }

    String setting = null;
    try (InputStream in = new FileInputStream(f)){
      setting = StreamUtils.copyToString(in, Charset.defaultCharset());
      Set set = Arrays.stream(setting.split(",")).map(i->String.format("hasIpAddress('%s')", i)).collect(Collectors.toSet());
      setting = String.join(" or ", set);
    } catch (FileNotFoundException e) {
      e.printStackTrace();
    } catch (IOException e) {
      e.printStackTrace();
    }
    finally {
      ipSetting = setting;
    }
  }
  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http.authorizeRequests()
            .antMatchers("/customLogin").permitAll()
            .antMatchers("/login").permitAll()
//            .antMatchers("/evidences/**").permitAll()
            .antMatchers("/static/**").permitAll()
//            .antMatchers("/**").access(ipSetting)
            .anyRequest().authenticated()
    .and()
    .formLogin()
            .loginPage("/customLogin")
            .usernameParameter("id")
            .passwordParameter("password")
    .and()
    .csrf().disable();
  }
  
  @Bean
  public DaoAuthenticationProvider authenticationProvider() {
    DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();
    authenticationProvider.setUserDetailsService(userDetailsService);
    authenticationProvider.setPasswordEncoder(passwordEncoder());
    
    return authenticationProvider;
  }

  @Bean
  public MessageDigestPasswordEncoder passwordEncoder() {
    return new MessageDigestPasswordEncoder("md5");
  }
}