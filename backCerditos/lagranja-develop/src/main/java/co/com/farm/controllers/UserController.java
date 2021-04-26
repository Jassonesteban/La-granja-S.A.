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

import co.com.farm.models.User;
import co.com.farm.models.Status;
import co.com.farm.services.UserService;

/**
 * The Class UserController.
 */
@RestController
@RequestMapping("/user")
public class UserController extends BaseController {

    /** The User service. */
    private UserService userService;

    /**
     * Instantiates a new User controller.
     *
     * @param UserService the User service
     */
    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    /**
     * Save User.
     *
     * @param User the User
     * @return the User
     */
    @PostMapping
    public User saveUser(@RequestBody User user) {
        return this.userService.saveUser(user);
    }

    /**
     * Delete User.
     *
     * @param id the id
     * @return the status
     */
    @DeleteMapping("/{id}")
    public Status deleteUser(@PathVariable String id) {
        return this.userService.deleteUser(id);
    }

    /**
     * Gets the User.
     *
     * @param id the id
     * @return the User
     */
    @GetMapping("/{id}")
    public User getUser(@PathVariable String id) {
        return this.userService.getUser(id);
    }
    
    

    /**
     * Gets the Users.
     *
     * @return the Users
     */
    @GetMapping
    public List<User> getUsers() {
        return this.userService.getUsers();
    }
}
