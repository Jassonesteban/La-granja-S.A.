package co.com.farm.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import co.com.farm.models.User;

@Repository
public interface UserRepository extends JpaRepository<User, String>{ 

}
