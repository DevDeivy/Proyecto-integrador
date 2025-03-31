package culti.authentication.application.services;

import culti.authentication.application.usecases.UserValidations;
import culti.authentication.domain.model.User;
import culti.authentication.infrastructure.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserServices {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserValidations userValidations;


    public User createUser(User user ){
        if (!userValidations.isValidEmail(user.getEmail())) {
            throw new IllegalArgumentException("Invalid email format");
        }

        if (userValidations.emailExists(user.getEmail())) {
            throw new IllegalArgumentException("Email is already registered");
        }

        return this.userRepository.save(new User( user.getEmail(), passwordEncoder.encode(user.getPassword()))
        );
    }

    public User getUserByEmail( String email ){
        return this.userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not fount"));
    }
}

