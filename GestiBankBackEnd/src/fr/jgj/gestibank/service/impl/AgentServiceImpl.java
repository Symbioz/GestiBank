package fr.jgj.gestibank.service.impl;

import java.util.List;

import fr.jgj.gestibank.dao.impl.AgentDAOImpl;
import fr.jgj.gestibank.model.Agent;

public class AgentServiceImpl {
	
	//sera modifié avec l'utilisation de Spring
	AgentDAOImpl agentDao = new AgentDAOImpl();
	
	//l'utilisation de Spring ne modifier aucune méthode ci-dessous
	public List<Agent> getAllAgents() {
		List<Agent> agentList = agentDao.getAllAgents();
		return agentList;
	}
	
	public Agent creerAgent(Agent agent) {
		Agent 	agentResponse = agentDao.creerAgent(agent);
		return agentResponse;
	}
	
	public Agent modifierAgent(Agent agent) {
		Agent agentResponse = agentDao.modifierAgent(agent);
		return agentResponse;
	}
	
	public Agent supprimerAgent(String id) {
		Agent agentResponse = agentDao.supprimerAgent(id);
		return agentResponse;
	}
	
	
}

