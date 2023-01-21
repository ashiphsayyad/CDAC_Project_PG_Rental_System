package com.example.demo.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;


@Entity
@Table(name="properties")
public class Properties {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int pr_id;
	
	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="lid")
	@JsonProperty(access=Access.WRITE_ONLY)
	Landlord l;
	
	
	
	@Column
	private String pr_type;
	@Column
	private String area;
	@Column
	private String city;
	
	@Column
	private String user;
	@Column
	private int rent;
	@Column
	private float brokerage;
	@Column
	private String facilities;
	
	
	@Column
	private int status;

	
	public Properties() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Properties(Landlord l, String pr_type, String area, String city,String user, int rent, float brokerage,
			String facilities, int room_nos, int status) {
		super();
		this.l = l;
		this.pr_type = pr_type;
		this.area = area;
		this.city = city;
		this.user=user;
		this.rent = rent;
		this.brokerage = brokerage;
		this.facilities = facilities;
		this.status = status;
	}

	public Properties(Landlord l, String pr_type, String area, String city,String user, int rent, String facilities,
			int status) {
		super();
		this.l = l;
		this.pr_type = pr_type;
		this.area = area;
		this.city = city;
		this.user=user;
		this.rent = rent;
		this.facilities = facilities;
		this.status = status;
	}


	public Properties( Landlord l, String pr_type, String area, String city,String user, int rent, float brokerage,
			String facilities, int status) {
		super();
		this.l = l;
		this.pr_type = pr_type;
		this.area = area;
		this.city = city;
		this.user=user;
		this.rent = rent;
		this.brokerage = brokerage;
		this.facilities = facilities;
		this.status = status;
	}


	public int getPr_id() {
		return pr_id;
	}

	public void setPr_id(int pr_id) {
		this.pr_id = pr_id;
	}

	public Landlord getL() {
		return l;
	}

	public void setL(Landlord l) {
		this.l = l;
	}

	public String getPr_type() {
		return pr_type;
	}

	public void setPr_type(String pr_type) {
		this.pr_type = pr_type;
	}

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
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

	public String getFacilities() {
		return facilities;
	}

	public void setFacilities(String facilities) {
		this.facilities = facilities;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}
	

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "Properties [pr_id=" + pr_id + ", l=" + l + ", pr_type=" + pr_type + ", area=" + area + ", city="
				+ city +", user="+user+ ", rent=" + rent + ", brokerage=" + brokerage + ", facilities=" + facilities + ", status=" + status + "]";
	} 
	
	
	
}
