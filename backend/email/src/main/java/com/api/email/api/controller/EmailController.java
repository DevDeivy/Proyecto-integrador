package com.api.email.api.controller;

import com.api.email.infrastructure.services.SendMessageService;
import com.api.email.api.dto.EmailDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/send/email")
public class EmailController {
    private SendMessageService sendMessageService;

    public EmailController(SendMessageService sendMessageService) {
        this.sendMessageService = sendMessageService;
    }

    @PostMapping("/send")
    public ResponseEntity<Object> sendEmail(@RequestBody EmailDTO emailDTO){
        return  sendMessageService.sendSimpleMessage(emailDTO);
    }
}
