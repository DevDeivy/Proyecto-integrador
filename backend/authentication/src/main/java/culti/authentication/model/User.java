package culti.authentication.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table( name = "tbl_user" )
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    @Column( name = "user_id")
    private long id;

    @Column( name = "user_email", nullable = false, unique = true)
    private String email;

    @Column( name = "user_password", nullable = false )
    private String password;

    public User(String email, String password) {
        this.email = email;
        this.password = password;
    }
}
