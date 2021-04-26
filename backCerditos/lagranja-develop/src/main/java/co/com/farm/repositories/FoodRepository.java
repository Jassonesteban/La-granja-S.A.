package co.com.farm.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import co.com.farm.models.Food;

@Repository
public interface FoodRepository extends JpaRepository<Food, String>{ 

}
