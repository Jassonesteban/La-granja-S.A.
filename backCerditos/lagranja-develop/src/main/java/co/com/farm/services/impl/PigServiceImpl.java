package co.com.farm.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import co.com.farm.models.Pig;
import co.com.farm.models.Status;
import co.com.farm.repositories.PigRepository;
import co.com.farm.services.PigService;

/**
 * The Class PigServiceImpl.
 */
@Service
@Transactional
public class PigServiceImpl implements PigService {

    /** The pig repository. */
    private PigRepository pigRepository;

    /**
     * Instantiates a new pig service impl.
     *
     * @param pigRepository the pig repository
     */
    @Autowired
    public PigServiceImpl(PigRepository pigRepository) {
        this.pigRepository = pigRepository;
    }

    /**
     * Save pig.
     *
     * @param pig the pig
     * @return the pig
     */
    @Override
    public Pig savePig(Pig pig) {
        return this.pigRepository.save(pig);
    }

    /**
     * Delete pig.
     *
     * @param pig the pig
     * @return the status
     */
    @Override
    public Status deletePig(String pig) {
        Status response = new Status();
        try {
            this.pigRepository.deleteById(pig);
            response.setMessage("request executed successfully.");
            response.setResponse("SUCCES");
        } catch (Exception e) {
            response.setMessage("request executed with error.");
            response.setResponse("ERROR");
        }
        return response;
    }

    /**
     * Gets the pig.
     *
     * @param id the id
     * @return the pig
     */
    @Override
    public Pig getPig(String id) {
        return this.pigRepository.findById(id).orElse(null);
    }

    /**
     * Gets the pigs.
     *
     * @return the pigs
     */
    @Override
    @Transactional(readOnly = true)
    public List<Pig> getPigs() {
        return this.pigRepository.findAll();
    }

}
