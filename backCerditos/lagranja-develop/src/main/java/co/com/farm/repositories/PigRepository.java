package co.com.farm.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import co.com.farm.models.Pig;

@Repository
public interface PigRepository extends JpaRepository<Pig, String>{ 

}
