package culti.authentication.api.controllers;

import culti.authentication.application.services.UserServices;
import culti.authentication.domain.model.User;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/culti/auth")
public class UserController {

    private final UserServices userServices;

    public UserController(UserServices userServices) {
        this.userServices = userServices;
    }

    @GetMapping("/Get/User/{email}")
    public User getUserByEmail( @PathVariable String email ){
        return userServices.getUserByEmail( email );
    }

    @PostMapping("/Post/User")
    public User getUserByEmail( @RequestBody User user ){
        return userServices.createUser(user);
    }
}
