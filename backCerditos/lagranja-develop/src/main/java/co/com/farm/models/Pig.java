package co.com.farm.models;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

/**
 * The Class Pig.
 */
@Entity
@Table(name = "PIGS")
public class Pig implements Serializable {

    /** The Constant serialVersionUID. */
    private static final long serialVersionUID = -5874309999109043944L;

    /** The id. */
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;
    
    /** The breed. */
    @Column
    private String breed;
    
    /** The age. */
    @Column
    private Integer age;
    
    /** The weight. */
    @Column
    private double weight;
    
    /** The food. */
    @ManyToOne
    @JoinColumn(name = "food_id")
    private Food food;
    
    /** The user. */
    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "user_id")
    private User user;

    /**
     * Instantiates a new pig.
     */
    public Pig() {
        super();
    }

    /**
     * Gets the id.
     *
     * @return the id
     */
    public String getId() {
        return id;
    }

    /**
     * Sets the id.
     *
     * @param id the new id
     */
    public void setId(String id) {
        this.id = id;
    }

    /**
     * Gets the breed.
     *
     * @return the breed
     */
    public String getBreed() {
        return breed;
    }

    /**
     * Sets the breed.
     *
     * @param breed the new breed
     */
    public void setBreed(String breed) {
        this.breed = breed;
    }

    /**
     * Gets the age.
     *
     * @return the age
     */
    public Integer getAge() {
        return age;
    }

    /**
     * Sets the age.
     *
     * @param age the new age
     */
    public void setAge(Integer age) {
        this.age = age;
    }

    /**
     * Gets the weight.
     *
     * @return the weight
     */
    public double getWeight() {
        return weight;
    }

    /**
     * Sets the weight.
     *
     * @param weight the new weight
     */
    public void setWeight(double weight) {
        this.weight = weight;
    }

    /**
     * Gets the food.
     *
     * @return the food
     */
    public Food getFood() {
        return food;
    }

    /**
     * Sets the food.
     *
     * @param food the new food
     */
    public void setFood(Food food) {
        this.food = food;
    }

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
    
    

}
