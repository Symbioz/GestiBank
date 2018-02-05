package service;

import java.util.List;

import dao.AgentDAO;
import model.Agent;

public class AgentService {
	
	//sera modifié avec l'utilisation de Spring
	AgentDAO agentDao = new AgentDAO();
	
	//l'utilisation de Spring ne modifier aucune méthode ci-dessous
	public List<Agent> getAllAgents() {
		List<Agent> agentList = agentDao.getAllAgents();
		return agentList;
	}
	
	public Agent createAgent(Agent agent) {
		Agent 	agentResponse = agentDao.createAgent(agent);
		return agentResponse;
	}
	
	/*public Agent updateAgent(Agent agent) {
		Agent agentResponse = agentDao.updateAgent(agent);
		return agentResponse;
	}*/
	
	public Agent deleteAgent(String id) {
		Agent agentResponse = agentDao.deleteAgent(id);
		return agentResponse;
	}
	
	
}

