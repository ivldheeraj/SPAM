package com.sma.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sma.model.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student,Long> {

//    public List<Student> findAll();

}
