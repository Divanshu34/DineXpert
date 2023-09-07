package com.backend.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.pojos.UserPOJO;


public interface IUserDAO extends JpaRepository<UserPOJO,Long>{
    UserPOJO findByUserEmailAndPassword(String userEmail, String password);
    List<UserPOJO> findByRole(String role);
}
