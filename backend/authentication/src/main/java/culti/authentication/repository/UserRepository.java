package culti.authentication.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import culti.authentication.model.User;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<culti.authentication.model.User> findByEmail (String email);
    boolean existsByEmail (String email);

}
