package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Images;
import com.example.demo.entities.Properties;
import com.example.demo.repositories.ImagesRepository;
import com.example.demo.repositories.PropertiesRepository;

@Service
public class ImagesService {
	
	@Autowired
	ImagesRepository r_repo;
	
	@Autowired
	PropertiesRepository prepo;
	
	public List<Optional<Images>> findByPr_id(Properties p)
	{
		List<Optional<Images>> l= r_repo.findByprid(p);
		System.out.println(l.size());
		return l;
	}
	
	
}
