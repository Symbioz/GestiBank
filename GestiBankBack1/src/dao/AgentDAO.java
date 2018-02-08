package dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import model.Adresse;
import model.Agent;

public class AgentDAO {

	static HashMap<String, Agent> agentsMap = createMap();
	
    static HashMap<String, Agent> createMap()
    {
    	HashMap<String,Agent> agentsMap = new HashMap<String,Agent>();
    	Agent agent1 = new Agent(1,1337,"jennifer","Vincent", "vincentjenni@gmail.com", "0265989855", "test", new Adresse("rue de lille",59200,"lille"));
		Agent agent2 = new Agent(2,576,"jess", "vinc", "jess@fre.fr", "0154521545","test1",new Adresse("rue de lille",59200,"lille"));
		agentsMap.put("1", agent1);
		agentsMap.put("2", agent2);
        return agentsMap;
    }
    
 
	public List<Agent> getAllAgents() {
		List<Agent> agentList = new ArrayList<Agent>(agentsMap.values());
		return agentList;
	}
	
	public Agent createAgent(Agent agent) {
		agentsMap.put(agent.getId() + "",  agent);
		return agentsMap.get(agent.getId());
	}
	
	
	// A MODIFIER
	/*public User updateUser(User user) {
		if (usersMap.get(user.getId()) != null) {
			usersMap.get(user.getId()).setUsername(user.getUsername());
			usersMap.get(user.getId()).setAddress(user.getAddress());
			usersMap.get(user.getId()).setEmail(user.getEmail());
		} else {
			usersMap.put(user.getId() + "", user);
		}
		return agentsMap.get(user.getId());
	}
	*/
	
	public Agent deleteAgent(String id) {
		Agent agentResponse = agentsMap.remove(id);
		return agentResponse;
	}
	
}