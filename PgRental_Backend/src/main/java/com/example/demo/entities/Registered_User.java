package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="registered_user")
public class Registered_User {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int user_id;
	@Column
	private String email_id;
	@Column
	private String user_type;
	@Column
	private String password;
	public Registered_User() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Registered_User(String email_id, String password,String user_type) {
		super();
		this.email_id = email_id;
		this.user_type = user_type;
		this.password = password;
	}
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public String getEmail_id() {
		return email_id;
	}
	public void setEmail_id(String email_id) {
		this.email_id = email_id;
	}
	public String getUser_type() {
		return user_type;
	}
	public void setUser_type(String user_type) {
		this.user_type = user_type;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "Registered_User [user_id=" + user_id + ", email_id=" + email_id + ", user_type=" + user_type
				+ ", password=" + password + "]";
	}
	
	
}
