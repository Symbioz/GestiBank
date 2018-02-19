package fr.jgj.gestibank.dao;

import java.util.List;

import fr.jgj.gestibank.model.Agent;



public interface IAgentDAO {
	
	public List<Agent> getAllAgents() ;
	
	public Agent creerAgent(Agent agent) ;
	
	public Agent modifierAgent (Agent agent) ;
	
	public Agent supprimerAgent(String id) ;
	
	public Agent getAgentById(String id);

}



