package co.com.farm.services;

import java.util.List;

import co.com.farm.models.Pig;
import co.com.farm.models.Status;

/**
 * The Interface PigService.
 */
public interface PigService {

    /**
     * Save pig.
     *
     * @param pig the pig
     * @return the pig
     */
    Pig savePig(Pig pig);

    /**
     * Delete pig.
     *
     * @param pig the pig
     * @return the status
     */
    Status deletePig(String pig);

    /**
     * Gets the pig.
     *
     * @param id the id
     * @return the pig
     */
    Pig getPig(String id);

    /**
     * Gets the pigs.
     *
     * @return the pigs
     */
    List<Pig> getPigs();

}
