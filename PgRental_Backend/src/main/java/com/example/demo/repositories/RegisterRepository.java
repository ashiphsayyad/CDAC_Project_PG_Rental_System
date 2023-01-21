package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Registered_User;

@Repository
public interface RegisterRepository extends JpaRepository<Registered_User,Integer> {

    @Query("select l from Registered_User l where l.email_id=:email_id and l.password=:password")
    public List<Registered_User> checkLogin(String email_id, String password);


    @Query("select r from Registered_User r where r.user_type='admin'")
    public Object getAdmin();
}
