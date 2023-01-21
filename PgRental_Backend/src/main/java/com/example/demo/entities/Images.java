package com.example.demo.entities;

import java.util.Arrays;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Entity
@Table(name="images")
public class Images {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int img_id;
	
	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="pr_id")
	@JsonProperty(access=Access.WRITE_ONLY)
	Properties prid;
	
	@Column
	private String name;
	@Column
	private String type;
	
	@Lob
	@Column(name="picBytes",length=Integer.MAX_VALUE,nullable=true)
	private byte[] pic_bytes;

	public Images() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Images(Properties prid, String name, String type, byte[] pic_bytes) {
		super();
		this.prid = prid;
		this.name = name;
		this.type = type;
		this.pic_bytes = pic_bytes;
		System.out.println(this.type+" "+this.name);
	}

	public int getImg_id() {
		return img_id;
	}

	public void setImg_id(int img_id) {
		this.img_id = img_id;
	}

	public Properties getPrid() {
		return prid;
	}

	public void setPr_id(Properties prid) {
		this.prid = prid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public byte[] getPic_Bytes() {
		return pic_bytes;
	}

	public void setPicBytes(byte[] pic_bytes) {
		this.pic_bytes = pic_bytes;
	}

	@Override
	public String toString() {
		return "Images [img_id=" + img_id + ", prid=" + prid + ", name=" + name + ", type=" + type + ", picBytes="
				+ Arrays.toString(pic_bytes) + "]";
	}
	
	
}
