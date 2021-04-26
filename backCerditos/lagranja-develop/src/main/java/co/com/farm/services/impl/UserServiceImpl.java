package co.com.farm.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import co.com.farm.models.Status;
import co.com.farm.models.User;
import co.com.farm.repositories.UserRepository;
import co.com.farm.services.UserService;

/**
 * The Class UserServiceImpl.
 */
@Service
@Transactional
public class UserServiceImpl implements UserService {

    /** The user repository. */
    private UserRepository userRepository;

    /**
     * Instantiates a new user service impl.
     *
     * @param userRepository the user repository
     */
    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    /**
     * Save user.
     *
     * @param user the user
     * @return the user
     */
    @Override
    public User saveUser(User user) {
        return this.userRepository.save(user);
    }

    /**
     * Delete user.
     *
     * @param user the user
     * @return the status
     */
    @Override
    public Status deleteUser(String user) {
        Status response = new Status();
        try {
            this.userRepository.deleteById(user);
            response.setMessage("request executed successfully.");
            response.setResponse("SUCCES");
        } catch (Exception e) {
            response.setMessage("request executed with error.");
            response.setResponse("ERROR");
        }
        return response;
    }

    /**
     * Gets the user.
     *
     * @param id the id
     * @return the user
     */
    @Override
    public User getUser(String id) {
        return this.userRepository.findById(id).orElse(null);
    }

    /**
     * Gets the users.
     *
     * @return the users
     */
    @Override
    public List<User> getUsers() {
        return this.userRepository.findAll();
    }

}
