package co.com.farm.services;

import java.util.List;

import co.com.farm.models.User;
import co.com.farm.models.Status;

/**
 * The Interface UserService.
 */
public interface UserService {
    
    /**
     * Save user.
     *
     * @param user the user
     * @return the user
     */
    User saveUser(User user);

    /**
     * Delete user.
     *
     * @param user the user
     * @return the status
     */
    Status deleteUser(String user);

    /**
     * Gets the user.
     *
     * @param id the id
     * @return the user
     */
    User getUser(String id);

    /**
     * Gets the users.
     *
     * @return the users
     */
    List<User> getUsers();
}
