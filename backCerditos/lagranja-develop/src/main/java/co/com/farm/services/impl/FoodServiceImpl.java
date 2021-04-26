package co.com.farm.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import co.com.farm.models.Food;
import co.com.farm.models.Status;
import co.com.farm.repositories.FoodRepository;
import co.com.farm.services.FoodService;

/**
 * The Class FoodServiceImpl.
 */
@Service
@Transactional
public class FoodServiceImpl implements FoodService {

    /** The food repository. */
    private FoodRepository foodRepository;

    /**
     * Instantiates a new food service impl.
     *
     * @param foodRepository the food repository
     */
    @Autowired
    public FoodServiceImpl(FoodRepository foodRepository) {
        this.foodRepository = foodRepository;
    }

    /**
     * Save food.
     *
     * @param food the food
     * @return the food
     */
    @Override
    public Food saveFood(Food food) {
        return this.foodRepository.save(food);
    }

    /**
     * Delete food.
     *
     * @param food the food
     * @return the status
     */
    @Override
    public Status deleteFood(String food) {
        Status response = new Status();
        try {
            this.foodRepository.deleteById(food);
            response.setMessage("request executed successfully.");
            response.setResponse("SUCCES");
        } catch (Exception e) {
            response.setMessage("request executed with error.");
            response.setResponse("ERROR");
        }
        return response;
    }

    /**
     * Gets the food.
     *
     * @param id the id
     * @return the food
     */
    @Override
    public Food getFood(String id) {
        return this.foodRepository.findById(id).orElse(null);
    }

    /**
     * Gets the foods.
     *
     * @return the foods
     */
    @Override
    public List<Food> getFoods() {
        return this.foodRepository.findAll();
    }

}
