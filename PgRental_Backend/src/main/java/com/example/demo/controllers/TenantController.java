package com.example.demo.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Landlord;
import com.example.demo.entities.Registered_User;
import com.example.demo.entities.Tenant;
import com.example.demo.entities.UserReg;
import com.example.demo.service.RegisterUserService;
import com.example.demo.service.TenantService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class TenantController {
	@Autowired
	TenantService tservice;
	
	@Autowired
	RegisterUserService rservice;
	
	@PostMapping("/tenreg")
	public Tenant registerTenant(@RequestBody UserReg t)
	{
		Registered_User u=new Registered_User(t.getEmail_id(),t.getPassword(),"tenant");
		Registered_User insert=rservice.addData(u);
		Tenant tuser=new Tenant(insert,t.getLname(),t.getFname());
		return tservice.addData(tuser);
		
	}
	
	@GetMapping("/getTenant/{tid}")
	public Optional<Tenant> getall(@PathVariable("tid") int tid)
	{
		return tservice.getByID(tid);
	}
	
	@GetMapping("/getTenantByUid")
	public Tenant getByUserID(@RequestParam("user_id") int user_id)
	{
		return tservice.getByUserid(user_id);
	}
	
	@GetMapping("/getTByEmailId")
	public Tenant getEmailId(@RequestParam("email_id") String email_id)
	{
		return tservice.getByEmailID(email_id);
	}
	
	@GetMapping("/tenantlist")
	public List<Tenant> getALL()
	{
		return tservice.getAll();
	}
}
