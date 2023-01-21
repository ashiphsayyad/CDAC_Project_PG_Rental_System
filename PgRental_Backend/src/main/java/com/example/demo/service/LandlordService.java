package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Landlord;
import com.example.demo.entities.Tenant;
import com.example.demo.repositories.LandlordRepository;


@Service
public class LandlordService {
	
	@Autowired
	LandlordRepository lrepo;
	
	public Landlord addData(Landlord l)
	{
		return lrepo.save(l);
	}
	
	public Landlord getByUserid(int id)
	{
		return lrepo.getByUserID(id);
	}
	
	public Optional<Landlord> getByID(int lid)
	{
		return lrepo.findById(lid);
	}
	
	public Landlord getByEmailID(String email_id)
	{
		return lrepo.getByUserEmail(email_id);
	}
	
	public List<Landlord> getALL()
	{
		return lrepo.findAll();
	}
}
