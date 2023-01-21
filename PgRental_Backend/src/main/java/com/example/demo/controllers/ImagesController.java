package com.example.demo.controllers;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.zip.DataFormatException;
import java.util.zip.Deflater;
import java.util.zip.Inflater;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.entities.Images;
import com.example.demo.entities.Properties;
import com.example.demo.repositories.ImagesRepository;
import com.example.demo.service.ImagesService;
import com.example.demo.service.PropertiesService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class ImagesController {
	@Autowired
	ImagesRepository imageRepository;
	
	@Autowired
	PropertiesService pservice;
	
	@Autowired
	ImagesService iservice;
	
	 @PostMapping(value="/saveImages", headers = "Content-Type= multipart/form-data")
	 public List<Images> uplaodImage(@RequestParam("files[]") MultipartFile []files,@RequestParam("pr_id") int pr_id) throws IOException {

		 List<Images> images = new ArrayList<Images>();
		 System.out.println(files.length);
		 Optional<Properties> pr=pservice.getByID(pr_id);
		 Properties p1=pr.get();
		 System.out.println(p1);
		 for(MultipartFile file:files) {
			 if (!file.isEmpty()) {
				 try {		   
					
					 
			         Images img = new Images(p1,file.getOriginalFilename(), file.getContentType(),
			        		 compressBytes(file.getBytes()));
			         System.out.println(img);
			         images.add(imageRepository.save(img));           
				 } catch (Exception e) {
		            System.out.println("You failed to upload  => " + e.getMessage());
		            
				 }
			   } else {
		    	  return null;
			   }
			 
		 }
		 return images;
	 }
	 
	 public static byte[] compressBytes(byte[] data) {
		 
         Deflater deflater = new Deflater();	 
         deflater.setInput(data);
         deflater.finish();
 	     ByteArrayOutputStream outputStream = 
 	        		 new ByteArrayOutputStream(data.length);
 
         byte[] buffer = new byte[1024];	 
         while (!deflater.finished()) {
 
             int count = deflater.deflate(buffer);	 
             outputStream.write(buffer, 0, count);	 
         }
 
         try {	 
             outputStream.close();	 
         } catch (IOException e) {
 
         }
 
         System.out.println("Compressed Image Byte Size - " + outputStream.toByteArray().length);	
         System.out.println(outputStream.toByteArray());
         return outputStream.toByteArray();	 
     }
	 
	 @GetMapping(path = { "/get/{pr_id}" })	 
     public List<Optional<Images>> getImage(@PathVariable("pr_id") int pr_id) throws IOException {
 
		 Optional<Properties> pr=pservice.getByID(pr_id);
		 Properties p1=pr.get();
		 return iservice.findByPr_id(p1);
         	 
     } 
	 
	
}
