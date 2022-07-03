package com.sma.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sma.model.Student;
import com.sma.repository.StudentRepository;

@CrossOrigin
@RestController
public class StudentController {

	@Autowired
	private StudentRepository studentRepository;
	
	@PostMapping("/create")
	public Student createStudent(@RequestBody Student student) {
		return studentRepository.save(student);
		
	}
	@PostMapping("/delete/{id}")
	public void deleteStudent(@PathVariable("id") Long id) {
		studentRepository.deleteById(id);
	}
	
	@GetMapping("/list")
	public List<Student> listStudents() {
		return studentRepository.findAll();
	}

}
