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
import com.example.demo.entities.Properties;
import com.example.demo.service.LandlordService;
import com.example.demo.service.PropertiesService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class PropertiesController {
	
	@Autowired
	PropertiesService pservice;
	@Autowired
	LandlordService lservice;
	
	@PostMapping("/save")
	public int addData(@RequestBody Properties p,@RequestParam("lid") int lid)
	{
		Optional<Landlord> l=lservice.getByID(lid);
		Landlord l1=l.get();
		try {
			Properties pr=new Properties(l1,p.getPr_type(),p.getArea(),p.getCity(),p.getUser(),p.getRent(),p.getBrokerage(),p.getFacilities() ,0);
			pservice.save(pr);
		}
		catch(Exception e)
		{
			return 0;
		}
		return 1;
	}
	@GetMapping("/getpropertylist/{lid}")
	public List<Properties> getPropertylist(@PathVariable("lid") int lid)
	{
		return pservice.getPropertylist(lid);	
	}
	
	@GetMapping("/getPropsByID")
	public Optional<Properties> getByID(int pr_id)
	{
		return pservice.getByID(pr_id);
	}
	
	@GetMapping("/getProps")
	public List<Properties> getALLProps()
	{
		return pservice.getAll();
	}
	
	@GetMapping("/getByLoc")
	public List<Properties> getByLoc(@RequestParam("city")String city ,@RequestParam("area") String area)
	{
		return pservice.getLocProps(city, area);
	}
	
	@GetMapping("/getByType")
	public List<Properties> getByType(@RequestParam("pr_type")String pr_type,@RequestParam("user") String user,@RequestParam("city") String city)
	{
		return pservice.getTypeProps(pr_type,user,city);
	}
	
	
	
}
