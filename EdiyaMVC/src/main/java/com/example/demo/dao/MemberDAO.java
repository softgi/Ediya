package com.example.demo.dao;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Repository;

import com.example.demo.vo.Member;


@Mapper
@Repository
public interface MemberDAO {

	
	
	public String login(Member m) throws DataAccessException;
}