package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Transaction;
import com.example.demo.repositories.TransactionRepository;

@Service
public class TransactionService {
	@Autowired
	TransactionRepository tr_repo;
	
	public void insertTr(Transaction t)
	{
		tr_repo.save(t);
	}
	
	public void updateTr(int pr_id)
	{
		tr_repo.updateTotal_Amt(pr_id);
	}
	
	public Transaction getTr(int tid)
	{
		return tr_repo.findByTid(tid);
	}
	public void deleteByOid(int oid)
	{
		tr_repo.deleteById(oid);
	}
	public List<Transaction> findAll()
	{
		return tr_repo.findAll();
	}
}
