package fr.jgj.gestibank.service;

import java.util.List;

import fr.jgj.gestibank.dao.UserDAO;
import fr.jgj.gestibank.model.User;

public class UserService {
	
	//sera modifié avec l'utilisation de Spring
	UserDAO userDao = new UserDAO();
	
	//utilisation de Spring
	//@Autowired
	//UserDao userDao;
	
	//l'utilisation de Spring ne modifier aucune méthode ci-dessous
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
