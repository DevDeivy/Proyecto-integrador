package culti.authentication.application.usecases;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import culti.authentication.repository.UserRepository;

import java.util.regex.Pattern;

@Service
@AllArgsConstructor
public class UserValidations {
    private final UserRepository userRepository;
    private static final String EMAIL_REGEX = "^[\\w.+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$";

    public boolean isValidEmail(String email) {
        return Pattern.matches(EMAIL_REGEX, email);
    }

    public boolean emailExists(String email) {
        return userRepository.findByEmail(email).isPresent();
    }

}
