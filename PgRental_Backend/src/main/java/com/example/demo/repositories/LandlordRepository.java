package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Landlord;
import com.example.demo.entities.Registered_User;
import com.example.demo.entities.Tenant;

@Repository
public interface LandlordRepository extends JpaRepository<Landlord, Integer> {

	@Query("select l from Landlord l where l.user_id=?1 ")
	public Landlord getByUserID(int id);
	
	
	@Query(value="select  l.lid,l.fname,l.lname,u.email_id,u.user_id from landlord l,registered_user u where l.user_id=u.user_id and u.email_id=?1 ",nativeQuery = true)
	public Landlord getByUserEmail(String email);
	
	@Query("select l from Landlord l where user_id=?1 ")
	public Landlord getLandlord(Registered_User u);
}
