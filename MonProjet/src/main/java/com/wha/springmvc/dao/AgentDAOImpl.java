package com.wha.springmvc.dao;


import java.util.List;

<<<<<<< HEAD
<<<<<<< HEAD
//import fr.jgj.gestibank.dao.IAgentDAO;
//import fr.jgj.gestibank.model.Agent;









=======
>>>>>>> Guillaume
=======


import org.hibernate.engine.spi.PersistenceContext;
>>>>>>> jennifer
import org.springframework.stereotype.Repository;

import com.wha.springmvc.dao.IAgentDAO;
import com.wha.springmvc.model.Agent;


@Repository("agentDaoImpl")
public class AgentDAOImpl extends AbstractDao<Long, Agent> implements IAgentDAO{
	
    @SuppressWarnings("unchecked")
	public List<Agent> getAllAgents() {
		List<Agent> agentList = getEntityManager()
				.createQuery("SELECT u FROM Agent  u")
				.getResultList();
		return agentList;
	}
    
	public void creerAgent(Agent agent) {
		persist(agent);
	}
	
	public Agent getAgentById(long id) {
		Agent agent = getByKey(id);
		return agent;
	}
	
	public Agent getAgentByMatricule(String matricule) {
		
		Agent agent =(Agent) getEntityManager()
				.createQuery("SELECT a FROM Agent a where a.matricule = :matricule").setParameter("matricule", matricule)
				.getSingleResult();
		return agent;
	}
    
	public void supprimerAgent(long id) {
		Agent agent = getByKey(id);
		
		delete(agent);
	//getEntityManager().createQuery("DELETE u FROM Agent a where a.id = :id");
		
	}
	
	
}
