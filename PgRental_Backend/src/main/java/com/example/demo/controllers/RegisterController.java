package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Registered_User;
import com.example.demo.service.LandlordService;
import com.example.demo.service.RegisterUserService;
import com.example.demo.service.TenantService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class RegisterController {

	@Autowired
	RegisterUserService rservice;
	
	@Autowired
	TenantService tservice;
	
	@Autowired
	LandlordService lserivce;
	
	

	
	@GetMapping("/login")
	public Object checkLogin(@RequestParam("email_id") String email_id,@RequestParam("password") String password)
	{
		 return rservice.checkLogin(email_id,password);
	}
	
	/*@GetMapping("/adminlogin")
	public String Login(@RequestParam("email_id") String email_id,@RequestParam("password") String password)
	{
		 return rservice.Login(email_id,password);
	}*/
	
	@GetMapping("/all")
	public List<Registered_User> getAllUsers()
	{
		return rservice.getAll();
	}
}
