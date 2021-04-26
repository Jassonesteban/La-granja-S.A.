package co.com.farm.models;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 * The Class Food.
 */
@Entity
@Table(name = "FOODS")
public class Food implements Serializable {

    /** The Constant serialVersionUID. */
    private static final long serialVersionUID = -7643299882066813845L;

    /** The id. */
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;
    
    /** The dose. */
    @Column
    private double dose;
    
    /** The description. */
    @Column
    private String description;
    
    /** The pigs. */
    @OneToMany(mappedBy = "food")
    private List<Pig> pigs;

    /**
     * Instantiates a new food.
     */
    public Food() {

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
     * Gets the dose.
     *
     * @return the dose
     */
    public double getDose() {
        return dose;
    }

    /**
     * Sets the dose.
     *
     * @param dose the new dose
     */
    public void setDose(double dose) {
        this.dose = dose;
    }

    /**
     * Gets the description.
     *
     * @return the description
     */
    public String getDescription() {
        return description;
    }

    /**
     * Sets the description.
     *
     * @param description the new description
     */
    public void setDescription(String description) {
        this.description = description;
    }

}
