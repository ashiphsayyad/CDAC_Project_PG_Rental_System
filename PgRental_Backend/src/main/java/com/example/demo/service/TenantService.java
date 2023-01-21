package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Tenant;
import com.example.demo.repositories.TenantRepository;

@Service
public class TenantService {
	
	@Autowired
	TenantRepository trepo;
	
	public Tenant addData(Tenant t)
	{
		return trepo.save(t);
	}
	
	public Tenant getByUserid(int id)
	{
		return trepo.getByUserID(id);
	}
	
	public Optional<Tenant> getByID(int tid)
	{
		return trepo.findById(tid);
	}
	
	public Tenant getByEmailID(String email_id)
	{
		return trepo.getByUserEmail(email_id);
	}
	
	public List<Tenant> getAll()
	{
		return trepo.findAll();
	}
}
