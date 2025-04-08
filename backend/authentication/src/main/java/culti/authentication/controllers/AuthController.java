package culti.authentication.controllers;

import culti.authentication.application.security.JwtUtil;
import culti.authentication.model.User;
import culti.authentication.repository.UserRepository;
import lombok.AllArgsConstructor;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/culti/auth")
@AllArgsConstructor
public class AuthController {
    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;
    private final PasswordEncoder encoder;
    private final JwtUtil util;

    @PostMapping("/signin")
    public String authUser(@RequestBody User user){
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        user.getEmail(),
                        user.getPassword()
                )
        );

        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        return util.generateToken(userDetails.getUsername());
    }


@PostMapping("/signup")
public ResponseEntity<Map<String, String>> registerUser(@RequestBody User user){
    Map<String, String> response = new HashMap<>();

    if (userRepository.existsByEmail(user.getEmail())){
        response.put("message", "Error: Username is already taken!");
        return ResponseEntity.badRequest().body(response);
    }

    User newUser = new User(
            user.getEmail(),
            encoder.encode(user.getPassword())
    );
    userRepository.save(newUser);

    response.put("message", "User registered successfully!");
    return ResponseEntity.ok(response);
}

}
