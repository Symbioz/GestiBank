package com.rj.gestibank.model;

public class User {
	static long nextId = 3;
    
	private long id = 0;
	private String username;
	private String address;
	private String email;
	
	public User() {
		id = 0;
	}

	public User(long id, String username, String address, String email) {
		super();
		this.id = id;
		this.username = username;
		this.address = address;
		this.email = email;
	}

	public long getId() {
		if (id == 0){
			id = nextId++;
		}
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	
}
