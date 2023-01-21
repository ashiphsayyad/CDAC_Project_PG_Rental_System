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

import com.example.demo.entities.Properties;
import com.example.demo.entities.Transaction;
import com.example.demo.repositories.TransactionRepository;
import com.example.demo.service.PropertiesService;
import com.example.demo.service.TransactionService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class TransactionController {
	
	@Autowired
	TransactionService tr_service;

	
	@Autowired
	PropertiesService pservice;
	
	@PostMapping("/saveTr")
	public int saveTransaction(@RequestParam("pr_id")int pr_id,@RequestBody Transaction t )
	{
		try {
		Transaction tr=new Transaction(t.getTid(),pr_id,t.getRent(),t.getBrokerage(),1);
		tr_service.insertTr(tr);
		tr_service.updateTr(pr_id);
		pservice.updateStatus(pr_id);
		}
		catch(Exception e)
		{
			return 0;
		}
		return 1;

	}
	
	@GetMapping("/getTr")
	public Transaction getTr(@RequestParam("tid") int tid)
	{
		return tr_service.getTr(tid);
	}
	
	@GetMapping("/deleteTr/{oid}")
	public void delTr(@PathVariable("oid") int oid)
	{
		tr_service.deleteByOid(oid);
	}
	
	@GetMapping("/getAllTr")
	public List<Transaction> getAll()
	{
		return tr_service.findAll();
	}
}
