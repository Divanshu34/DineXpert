package com.backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.backend.converters.interfaces.IUserConverter;
import com.backend.daos.IAddressDao;
import com.backend.daos.IUserDAO;
import com.backend.dtos.LoginDTO;
import com.backend.dtos.UserDTO;
import com.backend.pojos.UserPOJO;
// import com.backend.pojos.enums.UserRole;
import com.backend.services.interfaces.IUserService;

@Service
@Transactional
public class UserService implements IUserService {

    @Autowired
    private IUserDAO userDAO;

    @Autowired
    private IAddressDao addressDao;

    @Autowired
    private IUserConverter userConverter;

    @Override
    public UserPOJO addUser(UserDTO user) {

        if (user.getRole() == null) {
            user.setRole("CUSTOMER");
        }
        UserPOJO persistedUser = userConverter.dtoToPojo(user);
        persistedUser = userDAO.save(persistedUser);

        return persistedUser;
    }

    @Override
    public List<UserDTO> allUsers() {
        return userConverter.pojoToDto(userDAO.findAll());
    }
    @Override
    public List<UserDTO> allCustomers() {
        return userConverter.pojoToDto(userDAO.findByRole("CUSTOMER"));
    }

    @Override
    public UserDTO userById(Long userId) {
        return userConverter.pojoToDto(userDAO.findById(userId).orElse(null));
    }

    @Override
    public UserDTO userByEmailAndPassword(LoginDTO loginDTO) {
        System.out.println(loginDTO.getPassword() + loginDTO.getUserEmail());
        UserPOJO userPOJO = userDAO.findByUserEmailAndPassword(loginDTO.getUserEmail(), loginDTO.getPassword());
        if (null != userPOJO) {

            return userConverter.pojoToDto(userPOJO);
        } else {
            return null;
        }
    }

    @Override
    public UserDTO updateUserProfile(UserDTO userDTO,Long userID) {
        UserPOJO userPOJO=userDAO.findById(userID).get();
        if(userPOJO != null)
        {
            // userPOJO.setUserId(userID);
            userPOJO.setFirstName(userDTO.getFirstName());
            userPOJO.setLastName(userDTO.getLastName());
            userPOJO.setRole("CUSTOMER");
            userPOJO.setMobileNumber(userDTO.getMobileNumber());
            userPOJO.setUserEmail(userDTO.getUserEmail());
            userPOJO.setPassword(userDTO.getPassword());
        }
        userDAO.save(userPOJO);
        return userConverter.pojoToDto(userPOJO);
    }

}
