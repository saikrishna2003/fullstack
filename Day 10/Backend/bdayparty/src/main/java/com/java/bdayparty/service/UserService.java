package com.java.bdayparty.service;
import java.util.*;
import org.springframework.stereotype.Service;

import com.java.bdayparty.model.User;

@Service
public interface UserService {
    
    List<User> getAllUsers();

    User getUserById(Long id);

    User createUser(User user);

    User updateUser(Long id, User user);

    void deleteUser(Long id);
}
