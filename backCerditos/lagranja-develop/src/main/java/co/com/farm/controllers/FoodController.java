package co.com.farm.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import co.com.farm.models.Food;
import co.com.farm.models.Status;
import co.com.farm.services.FoodService;

/**
 * The Class FoodController.
 */
@RestController
@RequestMapping("/food")
public class FoodController extends BaseController {

    /** The Food service. */
    private FoodService foodService;

    /**
     * Instantiates a new Food controller.
     *
     * @param FoodService the Food service
     */
    @Autowired
    public FoodController(FoodService foodService) {
        this.foodService = foodService;
    }

    /**
     * Save Food.
     *
     * @param Food the Food
     * @return the Food
     */
    @PostMapping
    public Food saveFood(@RequestBody Food food) {
        return this.foodService.saveFood(food);
    }

    /**
     * Delete Food.
     *
     * @param id the id
     * @return the status
     */
    @DeleteMapping("/{id}")
    public Status deleteFood(@PathVariable String id) {
        return this.foodService.deleteFood(id);
    }

    /**
     * Gets the Food.
     *
     * @param id the id
     * @return the Food
     */
    @GetMapping("/{id}")
    public Food getFood(@PathVariable String id) {
        return this.foodService.getFood(id);
    }

    /**
     * Gets the Foods.
     *
     * @return the Foods
     */
    @GetMapping
    public List<Food> getFoods() {
        return this.foodService.getFoods();
    }
}
