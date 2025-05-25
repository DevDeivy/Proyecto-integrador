package com.api.email.application.usecases;

import com.api.email.api.dto.EmailDTO;
import com.api.email.common.ResponseConstants;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;
import java.util.regex.Pattern;

@Component
public class ValidationEmail {

    private static final Pattern EMAIL_PATTERN = Pattern.compile(
            "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$"
    );

    public ResponseEntity<Object> validationsEmail(EmailDTO emailDTO) {
        Map<String, Object> response = new HashMap<>();

        String email = emailDTO.getTo();

        boolean emailIsNull = email == null;
        boolean emailIsEmpty = !emailIsNull && email.trim().isEmpty();
        boolean emailValidFormat = !emailIsNull && !EMAIL_PATTERN.matcher(email).matches();
        boolean emailContainsSpace = !emailIsNull && email.contains(" ");
        boolean emailLength = !emailIsNull && email.length() > 254;

        if (emailIsNull) {
            response.put(ResponseConstants.MESSAGE, "Email is null.");
            response.put(ResponseConstants.ERROR, true);
            response.put(ResponseConstants.BODY, null);
            response.put(ResponseConstants.CODE, HttpStatus.CONFLICT.value());
            return new ResponseEntity<>(response, HttpStatus.OK);
        }

        if (emailIsEmpty) {
            response.put(ResponseConstants.MESSAGE, "Email is empty.");
            response.put(ResponseConstants.ERROR, true);
            response.put(ResponseConstants.BODY, email);
            response.put(ResponseConstants.CODE, HttpStatus.CONFLICT.value());
            return new ResponseEntity<>(response, HttpStatus.OK);
        }

        if (emailContainsSpace) {
            response.put(ResponseConstants.MESSAGE, "Email contains spaces.");
            response.put(ResponseConstants.ERROR, true);
            response.put(ResponseConstants.BODY, email);
            response.put(ResponseConstants.CODE, HttpStatus.CONFLICT.value());
            return new ResponseEntity<>(response, HttpStatus.OK);
        }

        if (emailLength) {
            response.put(ResponseConstants.MESSAGE, "Email exceeds maximum length.");
            response.put(ResponseConstants.ERROR, true);
            response.put(ResponseConstants.BODY, email);
            response.put(ResponseConstants.CODE, HttpStatus.CONFLICT.value());
            return new ResponseEntity<>(response, HttpStatus.OK);
        }

        if (emailValidFormat) {
            response.put(ResponseConstants.MESSAGE, "Email format is invalid.");
            response.put(ResponseConstants.ERROR, true);
            response.put(ResponseConstants.BODY, email);
            response.put(ResponseConstants.CODE, HttpStatus.CONFLICT.value());
            return new ResponseEntity<>(response, HttpStatus.OK);
        }

        response.put(ResponseConstants.MESSAGE, "Email is valid.");
        response.put(ResponseConstants.ERROR, false);
        response.put(ResponseConstants.BODY, email);
        response.put(ResponseConstants.CODE, HttpStatus.OK.value());

        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
