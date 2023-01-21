package com.example.demo.repositories;


import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.example.demo.entities.Transaction;

@Repository
@Transactional
public interface TransactionRepository extends JpaRepository<Transaction, Integer> {
	
	//@Modifying
	//@Query(value="insert into transaction t ('pr_id','rent','brokerage','status') values(?1,?2,?3,?4,?5)",nativeQuery=true)
	//public void saveTr(Transaction t);
	public Transaction findByTid(int tid);
	
	@Modifying
	@Query(value="update transaction set total_amt=rent+(rent*ifnull((brokerage/100),0)) where pr_id=?1",nativeQuery=true)
	public void updateTotal_Amt(int pr_id);
	
	//INSERT INTO `pg_rental`.`transaction` (`oid`, `pr_id`, `price`, `brokerage`, `status`) VALUES ('3', '4', '4000', '1', '1');
	//update transaction set total_amt = price+(price*ifnull((brokerage/100),0)) where pr_id is not null;
	
}
