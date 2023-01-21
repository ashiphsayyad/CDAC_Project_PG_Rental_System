package com.example.demo.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.GeneratorType;

@Entity
@Table(name="transaction")
public class Transaction {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int oid;
	
	
	@Column(name="pr_id")
	private int prid;
	
	@Column
	private int tid;
	
	@Column
	private int rent;
	
	@Column
	private float brokerage;
	
	@Column
	private float total_amt;
	
	@Column
	private int status;

	public Transaction() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Transaction(int tid,int prid, int rent, float brokerage, int status) {
		super();
		this.tid=tid;
		this.prid = prid;
		this.rent = rent;
		this.brokerage = brokerage;

		this.status = status;
	}

	public int getOid() {
		return oid;
	}

	public void setOid(int oid) {
		this.oid = oid;
	}

	

	public int getRent() {
		return rent;
	}

	public void setRent(int rent) {
		this.rent = rent;
	}

	public float getBrokerage() {
		return brokerage;
	}

	public void setBrokerage(float brokerage) {
		this.brokerage = brokerage;
	}

	public float getTotal_amt() {
		return total_amt;
	}

	public void setTotal_amt(float total_amt) {
		this.total_amt = total_amt;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}
	

	public int getTid() {
		return tid;
	}

	public void setTid(int tid) {
		this.tid = tid;
	}

	public void setPrid(int prid) {
		this.prid = prid;
	}

	@Override
	public String toString() {
		return "Transaction [oid=" + oid + ", tid=" + tid +", prid=" + prid + ", rent=" + rent + ", brokerage=" + brokerage
				+ ", total_amt=" + total_amt + ", status=" + status + "]";
	}

	public int getPrid() {
		return prid;
	}
	
	
	
}
