package culti.authentication.domain.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@Entity
@Table( name = "tbl_user" )
public class User {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    @Column( name = "user_id")
    private long id;

    @Column( name = "user_email", nullable = false )
    private String email;

    @Column( name = "user_password", nullable = false )
    private String password;

    public User(String email, String password) {
        this.email = email;
        this.password = password;
    }
}
