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

import co.com.farm.models.Pig;
import co.com.farm.models.Status;
import co.com.farm.services.PigService;

/**
 * The Class PigController.
 */
@RestController
@RequestMapping("/pig")
public class PigController extends BaseController {

    /** The pig service. */
    private PigService pigService;

    /**
     * Instantiates a new pig controller.
     *
     * @param pigService the pig service
     */
    @Autowired
    public PigController(PigService pigService) {
        this.pigService = pigService;
    }

    /**
     * Save pig.
     *
     * @param pig the pig
     * @return the pig
     */
    @PostMapping
    public Pig savePig(@RequestBody Pig pig) {
        return this.pigService.savePig(pig);
    }

    /**
     * Delete pig.
     *
     * @param id the id
     * @return the status
     */
    @DeleteMapping("/{id}")
    public Status deletePig(@PathVariable String id) {
        return this.pigService.deletePig(id);
    }

    /**
     * Gets the pig.
     *
     * @param id the id
     * @return the pig
     */
    @GetMapping("/{id}")
    public Pig getPig(@PathVariable String id) {
        return this.pigService.getPig(id);
    }

    /**
     * Gets the pigs.
     *
     * @return the pigs
     */
    @GetMapping
    public List<Pig> getPigs() {
        return this.pigService.getPigs();
    }
}
