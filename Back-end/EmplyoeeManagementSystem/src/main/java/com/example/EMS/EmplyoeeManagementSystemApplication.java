package com.example.EMS;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class EmplyoeeManagementSystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmplyoeeManagementSystemApplication.class, args);
		
		System.out.println("Process done...");
		
		
	}
	
	

}
