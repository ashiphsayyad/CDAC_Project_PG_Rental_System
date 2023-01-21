package com.example.demo.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="landlord")
public class Landlord {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int lid;
	
	@Column
	private String fname;
	@Column
	private String lname;
	
	
	@OneToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="user_id")
	Registered_User user_id;
	
	//@OneToMany(mappedBy="l",cascade=CascadeType.ALL)
	//List<Properties> properties;
	
	public Landlord() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Landlord(Registered_User user_id,String fname, String lname ) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.user_id = user_id;
	}


	/*public Landlord(String fname, String lname, Registered_User user_id, List<Properties> properties) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.user_id = user_id;
		this.properties = properties;
	}

	/public List<Properties> getProperties() {
		return properties;
	}

	public void setProperties(List<Properties> properties) {
		this.properties = properties;
		for(Properties p:properties)
			p.setL(this);
	}*/
	public int getLid() {
		return lid;
	}

	public void setLid(int lid) {
		this.lid = lid;
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

	public Registered_User getUser_id() {
		return user_id;
	}

	public void setUser_id(Registered_User user_id) {
		this.user_id = user_id;
	}

	@Override
	public String toString() {
		return "Landlord [lid=" + lid + ", fname=" + fname + ", lname=" + lname + ", user_id=" + user_id
				+   "]";
	}

	
	
}
