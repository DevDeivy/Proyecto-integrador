package com.api.email.infrastructure.services;

import com.api.email.api.dto.EmailDTO;
import com.api.email.application.usecases.ValidationEmail;
import com.api.email.common.ResponseConstants;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

import java.util.HashMap;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;


public class SendMessageServiceTest {

    private JavaMailSender mailSender;
    private ValidationEmail validationEmail;
    private SendMessageService sendMessageService;

    @BeforeEach
    public void setup() {
        mailSender = mock(JavaMailSender.class);
        validationEmail = mock(ValidationEmail.class);
        sendMessageService = new SendMessageService(mailSender, validationEmail);
    }

    @Test
    public void testSendSimpleMessage_success() {
        EmailDTO emailDTO = new EmailDTO();
        emailDTO.setTo("test@example.com");
        emailDTO.setSubject("Test Subject");
        emailDTO.setBody("Test Body");

        Map<String, Object> validationMap = new HashMap<>();
        validationMap.put("Error", false);
        ResponseEntity<Object> validationResponse = new ResponseEntity<>(validationMap, HttpStatus.OK);

        when(validationEmail.validationsEmail(emailDTO)).thenReturn(validationResponse);

        ResponseEntity<Object> response = sendMessageService.sendSimpleMessage(emailDTO);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        Map<String, Object> body = (Map<String, Object>) response.getBody();
        assertNotNull(body);
        assertFalse((Boolean) body.get(ResponseConstants.ERROR));
        assertEquals("Success send email.", body.get(ResponseConstants.MESSAGE));
        verify(mailSender, times(1)).send(any(SimpleMailMessage.class));
    }

    @Test
    public void testSendSimpleMessage_validationFails() {
        EmailDTO emailDTO = new EmailDTO();
        emailDTO.setTo("invalid@example.com");
        emailDTO.setSubject("Invalid Subject");
        emailDTO.setBody("Invalid Body");

        Map<String, Object> validationMap = new HashMap<>();
        validationMap.put("Error", true);
        ResponseEntity<Object> validationResponse = new ResponseEntity<>(validationMap, HttpStatus.OK);

        when(validationEmail.validationsEmail(emailDTO)).thenReturn(validationResponse);

        ResponseEntity<Object> response = sendMessageService.sendSimpleMessage(emailDTO);

        assertEquals(HttpStatus.CONFLICT, response.getStatusCode());
        Map<String, Object> body = (Map<String, Object>) response.getBody();
        assertNotNull(body);
        assertTrue((Boolean) body.get(ResponseConstants.ERROR));
        assertEquals("Filed send email", body.get(ResponseConstants.MESSAGE));
        verify(mailSender, never()).send(any(SimpleMailMessage.class));
    }
}