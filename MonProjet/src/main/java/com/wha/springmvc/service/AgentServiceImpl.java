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


import com.wha.springmvc.model.Agent;



import com.wha.springmvc.service.IAgentService;

@Service("agentService")
@Transactional
public class AgentServiceImpl implements IAgentService {
	

	@Autowired
	private IAgentDAO agentDaoImpl;
	
	
	public List<Agent> getAllAgents() {
		List<Agent> agentList = agentDaoImpl.getAllAgents();
		return agentList;
	}
	
	public void creerAgent(Agent agent) {
		agentDaoImpl.creerAgent(agent);
	}
	
	public Agent getAgentById(long id) {
		return agentDaoImpl.getAgentById((int)id);
	}
	
	public void supprimerAgent(long id) {
		agentDaoImpl.supprimerAgent(id);
	}
	
	public void modifierAgent(Agent agent) {
		Agent entity = agentDaoImpl.getAgentById((long)agent.getId());
        if(entity!=null){
        	entity.setNom(agent.getNom());
        	entity.setPrenom(agent.getPrenom());
        	entity.setIdentifiant(agent.getIdentifiant());
        	entity.setMdp(agent.getMdp());
        	entity.setEmail(agent.getEmail());
        	entity.setAdresse(agent.getAdresse());
        	entity.setNumTel(agent.getNumTel());
        	entity.setMatricule(agent.getMatricule());
        	entity.setDateDebutContrat(agent.getDateDebutContrat());
        }
        agentDaoImpl.creerAgent(entity);
	}
	
}

