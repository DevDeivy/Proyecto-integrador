package com.api.email;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class SendMessageService {
    private JavaMailSender mailSender;
    private UseCaseValidations useCaseValidations;

    public SendMessageService(JavaMailSender mailSender, UseCaseValidations useCaseValidations) {
        this.mailSender = mailSender;
        this.useCaseValidations = useCaseValidations;
    }

    public ResponseEntity<Object> sendSimpleMessage(EmailDTO emailDTO ){

        Map<String, Object> response = new HashMap<>();

        boolean validations = useCaseValidations.validationsSuccess(emailDTO);

        if (validations = true){

            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(emailDTO.getTo());
            message.setSubject(emailDTO.getSubject());
            message.setText(emailDTO.getBody());

            mailSender.send(message);

            response.put("Message", "Success send email.");
            response.put("Error", false);
            response.put("Body", emailDTO);
            response.put("Code", HttpStatus.OK.value());

            return new ResponseEntity<>(response, HttpStatus.OK);
        }

        response.put("Message", "Filed send email");
        response.put("Error", true);
        response.put("Body", emailDTO);
        response.put("Code", HttpStatus.CONFLICT.value());

        return new ResponseEntity<>(response, HttpStatus.CONFLICT);
    }
}
