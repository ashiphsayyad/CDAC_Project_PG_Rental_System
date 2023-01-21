package com.example.demo.entities;

public class UserReg {
	private String fname;
	private String lname;
	private String email_id;
	private String password;
	public UserReg() {
		super();
		// TODO Auto-generated constructor stub
	}
	public UserReg(String fname, String lname, String email_id, String password) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.email_id = email_id;
		this.password = password;
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
	public String getEmail_id() {
		return email_id;
	}
	public void setEmail_id(String email_id) {
		this.email_id = email_id;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "UserReg [fname=" + fname + ", lname=" + lname + ", email_id=" + email_id + ", password=" + password
				+ "]";
	}
	
	
}
