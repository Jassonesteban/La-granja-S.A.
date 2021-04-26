package co.com.farm.services;

import java.util.List;

import co.com.farm.models.Food;
import co.com.farm.models.Status;

/**
 * The Interface FoodService.
 */
public interface FoodService {
    
    /**
     * Save food.
     *
     * @param food the food
     * @return the food
     */
    Food saveFood(Food food);

    /**
     * Delete food.
     *
     * @param food the food
     * @return the status
     */
    Status deleteFood(String food);

    /**
     * Gets the food.
     *
     * @param id the id
     * @return the food
     */
    Food getFood(String id);

    /**
     * Gets the foods.
     *
     * @return the foods
     */
    List<Food> getFoods();
}
