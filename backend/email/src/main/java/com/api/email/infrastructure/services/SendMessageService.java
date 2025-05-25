package com.api.email.infrastructure.services;

import com.api.email.application.usecases.ValidationEmail;
import com.api.email.api.dto.EmailDTO;
import com.api.email.common.ResponseConstants;
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
    private ValidationEmail useCaseValidations;

    public SendMessageService(JavaMailSender mailSender, ValidationEmail useCaseValidations) {
        this.mailSender = mailSender;
        this.useCaseValidations = useCaseValidations;
    }

    public ResponseEntity<Object> sendSimpleMessage(EmailDTO emailDTO ){

        Map<String, Object> response = new HashMap<>();

        ResponseEntity<Object> validations = useCaseValidations.validationsEmail(emailDTO);
        Map<String, Object> validationdy = (Map<String, Object>) validations.getBody();
        boolean hasError = (boolean) validationdy.get("Error");

        if (!hasError){

            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(emailDTO.getTo());
            message.setSubject(emailDTO.getSubject());
            message.setText(emailDTO.getBody());

            mailSender.send(message);

            response.put(ResponseConstants.MESSAGE, "Success send email.");
            response.put(ResponseConstants.ERROR, false);
            response.put(ResponseConstants.BODY, emailDTO);
            response.put(ResponseConstants.VALIDATIONS, validations);
            response.put(ResponseConstants.CODE, HttpStatus.OK.value());

            return new ResponseEntity<>(response, HttpStatus.OK);
        }

        response.put(ResponseConstants.MESSAGE,  "Filed send email");
        response.put(ResponseConstants.ERROR, true);
        response.put(ResponseConstants.BODY, emailDTO);
        response.put(ResponseConstants.VALIDATIONS, validations);
        response.put(ResponseConstants.CODE, HttpStatus.CONFLICT.value());

        return new ResponseEntity<>(
                response,
                HttpStatus.CONFLICT
        );
    }
}
