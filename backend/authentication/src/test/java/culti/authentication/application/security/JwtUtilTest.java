package culti.authentication.application.security;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.concurrent.TimeUnit;

import static org.junit.jupiter.api.Assertions.*;

class JwtUtilTest {

    private JwtUtil jwtUtil;

    private final String secret = "mySuperSecretKeyThatIsLongEnoughToBeSecure12345";
    private final int expirationMs = 1000;

    @BeforeEach
    void setUp() {
        jwtUtil = new JwtUtil();
        jwtUtil.setJwtSecret(secret);
        jwtUtil.setJwtExpirationMs(expirationMs);
        jwtUtil.init();
    }

    @Test
    void generateToken_ShouldReturnValidToken() {
        String email = "test@example.com";

        String token = jwtUtil.generateToken(email);
        assertNotNull(token);
        assertTrue(jwtUtil.validateJwtToken(token));
        assertEquals(email, jwtUtil.getUsernameFromToken(token));
    }

    @Test
    void getUsernameFromToken_ShouldReturnCorrectUsername() {
        String email = "user@domain.com";
        String token = jwtUtil.generateToken(email);

        String extractedUsername = jwtUtil.getUsernameFromToken(token);
        assertEquals(email, extractedUsername);
    }

    @Test
    void validateJwtToken_ShouldReturnFalseForExpiredToken() throws InterruptedException {
        String token = jwtUtil.generateToken("expired@domain.com");

        TimeUnit.MILLISECONDS.sleep(expirationMs + 100);

        boolean isValid = jwtUtil.validateJwtToken(token);
        assertFalse(isValid);
    }

    @Test
    void validateJwtToken_ShouldReturnFalseForInvalidToken() {
        String invalidToken = "invalid.token.string";
        boolean isValid = jwtUtil.validateJwtToken(invalidToken);
        assertFalse(isValid);
    }

    @Test
    void validateJwtToken_ShouldReturnFalseForEmptyToken() {
        assertFalse(jwtUtil.validateJwtToken(""));
        assertFalse(jwtUtil.validateJwtToken(null));
    }
}
