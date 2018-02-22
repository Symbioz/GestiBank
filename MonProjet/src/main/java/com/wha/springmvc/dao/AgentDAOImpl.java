package com.wha.springmvc.dao;


import java.util.Date;
import java.util.HashMap;
import java.util.List;

<<<<<<< HEAD
//import fr.jgj.gestibank.dao.IAgentDAO;
//import fr.jgj.gestibank.model.Agent;









=======
>>>>>>> Guillaume
import org.springframework.stereotype.Repository;

import com.wha.springmvc.dao.IAgentDAO;
import com.wha.springmvc.model.Agent;


@Repository("agentDaoImpl")
public class AgentDAOImpl extends AbstractDao<Long, Agent> implements IAgentDAO{
	
    static HashMap<String, Agent> agentsMap = createMap();
	
    static HashMap<String, Agent> createMap()
    {
    	HashMap<String,Agent> agentsMap = new HashMap<String,Agent>();
    	Agent agent3 = new Agent( 3L,"NOM","prenom", "identifiant","mdp","couriel","adresse", "0564595515", "A001", new Date());
    	Agent agent1 = new Agent( 1L,"Vincent","jennifer", "login","222", "vincentjenni@gmail.com", "rue de lille 59200 lille", "0564595515","1337",new Date());
		Agent agent2 = new Agent( 2L,"Vinc", "jess","login2", "111", "jes@fre.fr", "rue de lille 59200 ","0564595515", "573", new Date());
		agentsMap.put("1", agent1);
		agentsMap.put("2", agent2);
		agentsMap.put("3", agent3);
        return agentsMap;
    }
    
 
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
    
	public void supprimerAgent(long id) {
		Agent agent = getByKey(id);
		delete(agent);
	}
	
		
	// A MODIFIER
	public Agent modifierAgent (Agent agent) {
		if (agentsMap.get(agent.getId()) != null) {
			agentsMap.get(agent.getId()).setMatricule(agent.getMatricule());
			agentsMap.get(agent.getId()).setIdentifiant(agent.getIdentifiant());
			agentsMap.get(agent.getId()).setNom(agent.getNom());
			agentsMap.get(agent.getId()).setPrenom(agent.getPrenom());
			agentsMap.get(agent.getId()).setEmail(agent.getEmail());
			agentsMap.get(agent.getId()).setNumTel(agent.getNumTel());
			agentsMap.get(agent.getId()).setAdresse(agent.getAdresse());
			agentsMap.get(agent.getId()).setDateDebutContrat(agent.getDateDebutContrat());
		} else {
			agentsMap.put(agent.getId() + "", agent);
		}
		return agentsMap.get(agent.getId());
	}
	

	
	
}
