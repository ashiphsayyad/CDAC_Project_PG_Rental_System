package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Landlord;
import com.example.demo.entities.Properties;
import com.example.demo.repositories.LandlordRepository;
import com.example.demo.repositories.PropertiesRepository;

@Service
public class PropertiesService {
	
	@Autowired
	private PropertiesRepository prepo;
	
	@Autowired
	private LandlordRepository lrepo;
	
	@Autowired
	private LandlordService lservice;
	
	@Autowired
	private ImagesService iservice;
	
	public void save(Properties p)
	{
		prepo.save(p);
	}
	
	public List<Properties> getAll()
	{
		return prepo.findAll();
	}
	public Optional<Properties> getByID(int pr_id)
	{
		return prepo.findById(pr_id);
	}
	public List<Properties> getPropertylist(int lid)
	{
		return prepo.getPropertylist(lid);
	}
	
	public List<Properties>getLocProps(String city,String area)
	{
		return prepo.getLoc(city, area);
		
	}
	
	public List<Properties>getTypeProps(String pr_type,String user,String city)
	{
		return prepo.getTypeProps(pr_type,user,city);
		
	}

	public Properties updateStatus(int pr_id)
	{
		return prepo.updateStatus(pr_id);
	}
}
