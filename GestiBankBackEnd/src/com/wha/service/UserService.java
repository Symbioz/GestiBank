package com.wha.service;

import java.util.List;

import com.wha.dao.UserDAO;
import com.wha.model.User;

public class UserService {
	
	//sera modifi� avec l'utilisation de Spring
	UserDAO userDao = new UserDAO();
	
	//l'utilisation de Spring ne modifier aucune m�thode ci-dessous
	public List<User> getAllUsers() {
		List<User> userList = userDao.getAllUsers();
		return userList;
	}
	
	public User getUserForId(String id) {
		User user = userDao.getUserForId(id);
		return user;
	}
	
	public User createUser(User user) {
		User userResponse = userDao.createUser(user);
		return userResponse;
	}
	
	public User updateUser(User user) {
		User userResponse = userDao.updateUser(user);
		return userResponse;
	}
	
	public User deleteUser(String id) {
		User userResponse = userDao.deleteUser(id);
		return userResponse;
	}
	
	public void deleteAllUsers() {
		userDao.deleteAllUsers();
	}
}