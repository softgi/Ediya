package com.example.demo.controller;

import javax.servlet.http.HttpSession;
import com.example.demo.service.MemberService;
import org.json.simple.JSONObject;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.demo.vo.Member;

public class MemberController {

	@Autowired
	MemberService memberService;
	
	@PostMapping("login")
	public String login(@ModelAttribute Member m, HttpSession session) {
		JSONObject json=new JSONObject();
	try {
		System.out.println(m);
		String name=memberService.login(m);
		
		
		if(name!=null) {//login성공
			
			m.setName(name);
			session.setAttribute("m", m);			
			json.put("name", name);
		
		}else {
			json.put("errMsg", "로그인 오류");
		}
	}catch(Exception e) {
			json.put("errMsg", "로그인오류");
		}
		return json.toJSONString();
	}
	
}
