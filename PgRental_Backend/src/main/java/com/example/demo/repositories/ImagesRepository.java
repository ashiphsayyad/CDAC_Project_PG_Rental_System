package com.example.demo.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Images;
import com.example.demo.entities.Properties;

@Repository
public interface ImagesRepository extends JpaRepository<Images, Integer> {
	Optional<Images> findByName(String name);
	
	
	//@Query("select i from Images i where i.pr_id=?1")
	List<Optional<Images>> findByprid(Properties p);
}
