package com.example.demo.repositories;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Landlord;
import com.example.demo.entities.Properties;

@Repository
@Transactional
public interface PropertiesRepository extends JpaRepository<Properties, Integer> {

	@Modifying
	@Query(value="insert into properties (`lid`, `pr_type`, `area`, `city`, `user`, `rent`, `brokerage`, `facilities`, `room_nos`, `status`) values(?1,?2,?3,?4,?5,?6,?7,?8,?9,?10)",nativeQuery=true)
	public void saveProperty(Properties p);
	
	//INSERT INTO `pg_rental`.`properties` (`lid`, `pr_type`, `area`, `city`, `user`, `rent`, `brokerage`, `facilities`, `room_nos`, `status`) VALUES ('2', 'pg', 'hinjewadi', 'pune', 'girls', '5500', '0', 'ac,Cupboards,Maid,Cooking gas,Refridgerator,seperate rooms', '2', '0');
	
	@Query("Select p from Properties p where p.city=?1 and p.area=?2")
	public List<Properties>getLoc(String city,String area);
	
	
	@Query(value="Select * from properties p where p.pr_type=?1 and p.user=?2 and p.city=?3",nativeQuery=true)
	public List<Properties>getTypeProps(String pr_type, String user,String city);
	
	@Query(value="select p.pr_id,p.lid,p.pr_type,p.area,p.city,p.user,p.rent,p.brokerage,p.facilities,p.status from properties p where lid=?1",nativeQuery = true )
    public List<Properties> getPropertylist(int lid);

	//UPDATE `pgrental1`.`properties` SET `status` = '1' WHERE (`pr_id` = '1') and (`lid` = '1');
	
	@Modifying
	@Query(value="update properties set 'status'='1' where pr_id=?1",nativeQuery =true)
	public Properties updateStatus(int pr_id);
}
