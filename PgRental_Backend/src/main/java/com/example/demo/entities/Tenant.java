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

@Entity
@Table(name="tenant")
public class Tenant {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int tid;
	
	@Column
	private String fname;
	@Column
	private String lname;
	
	@OneToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="user_id")
	Registered_User user_id;
	public Tenant() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Tenant(Registered_User user_id, String fname, String lname) {
		super();
		this.user_id = user_id;
		this.fname = fname;
		this.lname = lname;
	}
	public int getTid() {
		return tid;
	}
	public void setTid(int tid) {
		this.tid = tid;
	}
	public Registered_User getUser_id() {
		return user_id;
	}
	public void setUser_id(Registered_User user_id) {
		this.user_id = user_id;
	}
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getLname() {
		return lname;
	}
	public void setLname(String lname) {
		this.lname = lname;
	}
	@Override
	public String toString() {
		return "Tenant [tid=" + tid + ", user_id=" + user_id + ", fname=" + fname + ", lname=" + lname + "]";
	}
	
	
	
}
