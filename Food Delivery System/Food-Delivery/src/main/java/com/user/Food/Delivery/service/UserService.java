package com.user.Food.Delivery.service;

import com.user.Food.Delivery.dto.UserDTO;
import com.user.Food.Delivery.model.User;
import com.user.Food.Delivery.repo.UserRepo;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class UserService {
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private ModelMapper modelMapper;



    public List<User> getAllUsers(){
        return userRepo.findAll();
    }


     public UserDTO saveUser(UserDTO userDTO){
        userRepo.save(modelMapper.map(userDTO, User.class));
        return userDTO;
     }

}