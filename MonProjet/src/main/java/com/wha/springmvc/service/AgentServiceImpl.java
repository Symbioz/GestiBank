package com.wha.springmvc.service;

import java.util.List;

//import fr.jgj.gestibank.dao.impl.AgentDAOImpl;
//import fr.jgj.gestibank.model.Agent;
//import fr.jgj.gestibank.service.IAgentService;







import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;



//import com.wha.springmvc.dao.AgentDAOImpl;
import com.wha.springmvc.dao.IAgentDAO;
import com.wha.springmvc.dao.UserDao;
import com.wha.springmvc.model.Agent;
import com.wha.springmvc.model.User;
import com.wha.springmvc.service.IAgentService;

@Service("agentService")
@Transactional
public class AgentServiceImpl implements IAgentService {
	
	//sera modifi� avec l'utilisation de Spring
	//AgentDAOImpl agentDaoImpl = new AgentDAOImpl();
	@Autowired
	private IAgentDAO agentDaoImpl;
	
	//l'utilisation de Spring ne modifier aucune m�thode ci-dessous
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
	
	public Agent supprimerAgent(String id) {
		Agent agentResponse = agentDaoImpl.supprimerAgent(id);
		return agentResponse;
	}
	
	public Agent getAgentById(long id) {
		Agent agent = agentDaoImpl.getAgentById((int)id);
		return agent;
     }
	
	
}

