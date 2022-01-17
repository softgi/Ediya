package com.example.demo.vo;

public class Member {

	@Override
	public String toString() {
		return "Member [id=" + id + ", pw=" + pw + ", name=" + name + "]";
	}



	private String id,pw,name;
	
	public static String login(Member m) {
		
		return null;
	}


	public String getId() {
		return id;
	}



	public void setId(String id) {
		this.id = id;
	}



	public String getPw() {
		return pw;
	}



	public void setPw(String pw) {
		this.pw = pw;
	}



	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	public Member(String id, String pw) {
		super();
		setId(id);
		setPw(pw);
	}



	public Member(String id, String pw, String name) {
		this(id,pw);
		this.name = name;
	}



	public Member() {
		super();
		
	}

}
