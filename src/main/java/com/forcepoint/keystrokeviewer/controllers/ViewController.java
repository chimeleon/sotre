package com.forcepoint.keystrokeviewer.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class ViewController {
    @GetMapping("/")
    public String index() {
        return "index.html";
    }
    @GetMapping("/customLogin")
    public String login() {
        return "login.html";
    }
}