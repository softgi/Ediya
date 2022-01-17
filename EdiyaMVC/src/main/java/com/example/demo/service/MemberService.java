package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.MemberDAO;
import com.example.demo.vo.Member;

@Service
public class MemberService {

	@Autowired
	MemberDAO memberDAO;
	
	public String login(Member m) throws Exception{		
		return memberDAO.login(m);
	}
}
