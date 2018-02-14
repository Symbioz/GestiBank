package fr.jgj.gestibank.service.impl;

import java.util.List;

import fr.jgj.gestibank.dao.impl.AgentDAOImpl;
import fr.jgj.gestibank.model.Agent;
import fr.jgj.gestibank.service.IAgentService;

public class AgentServiceImpl implements IAgentService {
	
	//sera modifié avec l'utilisation de Spring
	AgentDAOImpl agentDaoImpl = new AgentDAOImpl();
	
	//l'utilisation de Spring ne modifier aucune méthode ci-dessous
	public List<Agent> getAllAgents() {
		List<Agent> agentList = agentDaoImpl.getAllAgents();
		return agentList;
	}
	
	public Agent creerAgent(Agent agent) {
		Agent 	agentResponse = agentDaoImpl.creerAgent(agent);
		return agentResponse;
	}
	
	public Agent modifierAgent(Agent agent) {
		Agent agentResponse = agentDaoImpl.modifierAgent(agent);
		return agentResponse;
	}
	
	public Agent supprimerAgent(Long id) {
		Agent agentResponse = agentDaoImpl.supprimerAgent(id);
		return agentResponse;
	}
	
}

