package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Landlord;
import com.example.demo.entities.Registered_User;
import com.example.demo.entities.Tenant;

@Repository
public interface TenantRepository extends JpaRepository<Tenant,Integer>{

	@Query("select t from Tenant t where t.user_id=?1 ")
	public Tenant getByUserID(int id);
	
	@Query(value="select  t.tid,t.fname,t.lname,u.email_id,u.user_id from tenant t,registered_user u where t.user_id=u.user_id and u.email_id=?1 ",nativeQuery = true)
	public Tenant getByUserEmail(String Email);
	
	@Query("select t from Tenant t where user_id=?1 ")
	public Tenant getTenant(Registered_User u);
}
