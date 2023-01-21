package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Registered_User;
import com.example.demo.entities.Tenant;
import com.example.demo.repositories.LandlordRepository;
import com.example.demo.repositories.RegisterRepository;
import com.example.demo.repositories.TenantRepository;

@Service
public class RegisterUserService {
	@Autowired
	RegisterRepository r_repo;
	
	/*public String checkLogin(String email_id, String password) 
	{
		List<Object> obj=r_repo.checkLogin(email_id,password) ;
		String s="";
		System.out.println(obj);
		//if(obj.getUser_type().equals("tenant"))
		//{
			System.out.println(obj.get(0));
			Tenant tr=trepo.getByUserID((int)obj.get(0));
			s=tr.getUser_id().toString()+"_"+"tenant";
			System.out.println(s);
			System.out.println(tr);
		//}
		/*for(Object o:obj)
		{
			System.out.println(o);
			Tenant t=(Tenant)o;
			System.out.println(t.getUser_id());
			
			s=t.getUser_id().toString()+"_"+"Tenant";
		}
		return s;
		//return r_repo.checkLogin(email_id, password);
	}*/
	
	public Object checkLogin(String email_id, String password)
	{
		Registered_User r = r_repo.checkLogin(email_id, password).get(0);
		String role =  r.getUser_type();
		Object o = null;
		if(role.equals("tenant"))
		{
			o = trepo.getTenant(r);
		}
		else if(role.equals("landlord"))
		{
			o = lrepo.getLandlord(r);
		}
		else if(role.equals("admin"))
		{
			o=r_repo.getAdmin();
		}
		return o;
	}

	@Autowired
	TenantRepository trepo;
	
	@Autowired
	LandlordRepository lrepo;
	
	public Registered_User addData(Registered_User u)
	{
		return r_repo.save(u);
	}
	
	/*public String checkLogin(String email_id, String password) 
	{
		List<Object> obj=r_repo.checkLogin(email_id,password) ;
		String s="";
		System.out.println(obj);
		//if(obj.getUser_type().equals("tenant"))
		//{
			System.out.println(obj.get(0));
			Tenant tr=trepo.getByUserID((int)obj.get(0));
			s=tr.getUser_id().toString()+"_"+"tenant";
			System.out.println(s);
			System.out.println(tr);
		//}
		/*for(Object o:obj)
		{
			System.out.println(o);
			Tenant t=(Tenant)o;
			System.out.println(t.getUser_id());
			
			s=t.getUser_id().toString()+"_"+"Tenant";
		}
		return s;
		//return r_repo.checkLogin(email_id, password);
	}*/
	
	
	public List<Registered_User> getAll()
	{
		return r_repo.findAll();
	}
}
