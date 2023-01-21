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
import com.example.demo.service.LandlordService;
import com.example.demo.service.RegisterUserService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class LandlordController {
	@Autowired
	LandlordService lservice;
	
	@Autowired
	RegisterUserService rservice;
	
	@PostMapping("/landlordreg")
	public Landlord registerTenant(@RequestBody UserReg l)
	{
		Registered_User u=new Registered_User(l.getEmail_id(),l.getPassword(),"landlord");
		Registered_User insert=rservice.addData(u);
		Landlord l_user=new Landlord(insert,l.getFname(),l.getLname());
		return lservice.addData(l_user);
		
	}
	
	@GetMapping("/getLandlord/{lid}")
	public Optional<Landlord> getall(@PathVariable("lid") int lid)
	{
		return lservice.getByID(lid);
	}
	
	@GetMapping("/getLandlordByUid")
	public Landlord getByUserID(@RequestParam("user_id") int user_id)
	{
		return lservice.getByUserid(user_id);
	}
	
	@GetMapping("/getLByEmailId")
	public Landlord getEmailId(@RequestParam("email_id") String email_id)
	{
		return lservice.getByEmailID(email_id);
	}
	
	@GetMapping("/landlordlist")
	public List<Landlord> getAll()
	{
		return lservice.getALL();
	}
}
