package com.forcepoint.keystrokeviewer;

import lombok.Data;

@Data
public class ExceptionResponse {
    private int code;
    private String message;
    private Object o;

    public ExceptionResponse(int value, String s, Object o) {
        this.code = value;
        this.message = s;
        this.o = o;
    }
    public ExceptionResponse(int value, String s) {
        this.code = value;
        this.message = s;
    }
}
