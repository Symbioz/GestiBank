package fr.jgj.gestibank.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import fr.jgj.gestibank.model.User;

public class UserDAO {
	
	//static HashMap<String, User> usersMap = new HashMap<String, User>();
	static HashMap<String, User> usersMap = createMap();

    static HashMap<String, User> createMap()
    {
    	HashMap<String,User> usersMap = new HashMap<String,User>();
    	User user1 = new User(1, "wajih", "Paris 75000", "wajih@gk.com");
		User user2 = new User(2, "aline", "Rueil 92500", "aline@gk.com");
		usersMap.put("1", user1);
		usersMap.put("2", user2);
        return usersMap;
    }
    	
    		
	public UserDAO() {
//		User user1 = new User(1, "wajih", "Paris 75000", "wajih@gk.com");
//		User user2 = new User(2, "aline", "Rueil 92500", "aline@gk.com");
//		usersMap.put("1", user1);
//		usersMap.put("2", user2);
	}
	
	public List<User> getAllUsers() {
		List<User> userList = new ArrayList<User>(usersMap.values());
		return userList;
	}
	
	public User getUserForId(String id) {
		User user = usersMap.get(id);
		return user;
	}
	
	public User createUser(User user) {
		usersMap.put(user.getId() + "",  user);
		return usersMap.get(user.getId());
	}
	
	public User updateUser(User user) {
		if (usersMap.get(user.getId()) != null) {
			usersMap.get(user.getId()).setUsername(user.getUsername());
			usersMap.get(user.getId()).setAddress(user.getAddress());
			usersMap.get(user.getId()).setEmail(user.getEmail());
		} else {
			usersMap.put(user.getId() + "", user);
		}
		return usersMap.get(user.getId());
	}
	
	public User deleteUser(String id) {
		User userResponse = usersMap.remove(id);
		return userResponse;
	}
	
	public void deleteAllUsers() {
		usersMap.clear();
	}
	
}
